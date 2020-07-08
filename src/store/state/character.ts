import { HistoryEvent, HistoryTalentAdvance } from "./history";
import { RaceName, races } from "../../data/races";
import {
	CareerName,
	careers,
	SkillChoice,
	TalentChoice,
} from "../../data/careers";
import { StatBlock, PrimaryStat, PrimaryStatList } from "../../data/stats";
import { SkillName, SkillMastery } from "../../data/skills";
import { TalentName, talents } from "../../data/talents";
import { Stat } from "../../data/stats";

export interface Character {
	name: string;
	race: RaceName;
	career: CareerName;
	history: HistoryEvent[];
	birthplace: string;
	age: number;
	gender: "Male" | "Female";
	weight: number;
	height: number;
	statRolls: StatBlock;
	shallyasMercy: PrimaryStat | null;
	uiState: CharacterUiState;
}

export enum CharacterAdvancesPage {
	Root,
	FreeAdvances,
	RequiredAdvances,
	OptionalAdvances,
	OtherChanges,
}

export interface CharacterUiState {
	advanceBarState: CharacterAdvancesPage;
}

export interface BonusDescriptor {
	bonus: number;
	desc: string;
}

export interface StatData {
	total: number;
	racial: number;
	roll: number;
	shallyasMercy: boolean;
	bonuses: BonusDescriptor[];
	sitBonuses: BonusDescriptor[];
}

export type StatBlockWithBonuses = {
	[K in Stat]: StatData;
};

export const bonusDescStr = (bonuses: BonusDescriptor[]) =>
	bonuses
		.map(
			(bonus) =>
				`  ${bonus.bonus >= 0 ? "+" : ""}${bonus.bonus} - ${bonus.desc}\n`
		)
		.join("");

export const calcStatBlock = (char: Character): StatBlockWithBonuses => {
	const race = races[char.race];
	const baseStat = (stat: Stat) => {
		const racial =
			stat in PrimaryStatList ? race.baseStats[stat as PrimaryStat] : 0;
		const roll = char.statRolls[stat];
		const total = racial + (char.shallyasMercy == stat ? 11 : roll);
		return {
			racial: racial,
			roll: roll,
			total: total,
			shallyasMercy: char.shallyasMercy == stat,
			bonuses: [],
			sitBonuses: [],
		};
	};
	const stats: StatBlockWithBonuses = {
		WS: baseStat("WS"),
		BS: baseStat("BS"),
		S: baseStat("S"),
		T: baseStat("T"),
		Ag: baseStat("Ag"),
		Int: baseStat("Int"),
		WP: baseStat("WP"),
		Fel: baseStat("Fel"),
		A: baseStat("A"),
		W: baseStat("W"),
		SB: baseStat("SB"),
		TB: baseStat("TB"),
		MV: baseStat("MV"),
		Mag: baseStat("Mag"),
		IP: baseStat("IP"),
		FP: baseStat("FP"),
	};
	for (const event of char.history) {
		if (event.type == "StatAdvance") {
			stats[event.stat].bonuses.push({ bonus: event.change, desc: "advance" });
			stats[event.stat].total += event.change;
		} else if (event.type == "TalentAdvance") {
			const talent = talents[event.talent];
			for (const statBonus of talent.statBonus) {
				if (statBonus.condition == null) {
					stats[statBonus.stat].bonuses.push({
						bonus: statBonus.bonus,
						desc: talent.name,
					});
					stats[statBonus.stat].total += statBonus.bonus;
				} else {
					stats[statBonus.stat].sitBonuses.push({
						bonus: statBonus.bonus,
						desc: `${statBonus.condition} (${talent.name})`,
					});
				}
			}
		}
	}
	stats.TB.total += Math.floor(stats.T.total / 10);
	stats.TB.bonuses.unshift({
		bonus: Math.floor(stats.T.total / 10),
		desc: "Toughness / 10",
	});
	stats.SB.total += Math.floor(stats.S.total / 10);
	stats.SB.bonuses.unshift({
		bonus: Math.floor(stats.S.total / 10),
		desc: "Strength / 10",
	});

	return stats;
};

export interface OwnedSkill {
	skill: SkillName;
	mastery: SkillMastery;
	bonuses: BonusDescriptor[];
	sitBonuses: BonusDescriptor[];
}

export const getSkillList = (char: Character): OwnedSkill[] => {
	const ownedTalents = getTalentList(char);
	const skills: OwnedSkill[] = [];
	const addSkill = (skill: SkillName) => {
		const ownedSkill = skills.find((ownedSkill) => ownedSkill.skill === skill);
		if (ownedSkill == undefined) {
			const bonuses: BonusDescriptor[] = [];
			const sitBonuses: BonusDescriptor[] = [];
			for (const talent of ownedTalents) {
				for (const bonus of talents[talent].skillBonus) {
					if (bonus.skill == skill) {
						if (bonus.condition == null) {
							bonuses.push({ bonus: bonus.bonus, desc: talents[talent].name });
						} else {
							sitBonuses.push({
								bonus: bonus.bonus,
								desc: `${bonus.condition} (from ${talents[talent].name})`,
							});
						}
					}
				}
			}
			skills.push({
				skill: skill,
				mastery: 0,
				bonuses: bonuses,
				sitBonuses: sitBonuses,
			});
		} else if (ownedSkill.mastery == 0) {
			ownedSkill.mastery = 1;
		} else if (ownedSkill.mastery == 1) {
			ownedSkill.mastery = 2;
		} else {
			console.error(
				`Character ${char.name} has skill ${skill} more than 3 times`
			);
		}
	};

	for (const event of char.history) {
		if (event.type == "SkillAdvance") {
			addSkill(event.skill);
		}
	}
	for (const ownedSkill of skills) {
		if (ownedSkill.mastery == 1) {
			ownedSkill.bonuses.push({ bonus: 10, desc: "learned twice" });
		} else if (ownedSkill.mastery == 2) {
			ownedSkill.bonuses.push({ bonus: 20, desc: "learned thrice" });
		}
	}
	return skills;
};

export const getTalentList = (char: Character): TalentName[] => {
	return char.history
		.filter(
			(event): event is HistoryTalentAdvance => event.type == "TalentAdvance"
		)
		.map((event) => event.talent);
};

export const getCurrentCareer = (char: Character): CareerName => {
	return char.career;
};

export const getFreeSkillChoices = (char: Character): SkillChoice[] => {
	const career = getCurrentCareer(char);
	const careerSkills = careers[career].skills;
	const availableSkills: SkillChoice[] = [];
	const ownedSkills = getSkillList(char);

	for (const careerSkill of careerSkills) {
		if (typeof careerSkill != "string") {
			const unchosen = careerSkill.skills.filter(
				(skill) =>
					ownedSkills.find((ownedSkill) => ownedSkill.skill == skill) ==
					undefined
			);

			const numChosen = careerSkill.skills.length - unchosen.length;
			if (careerSkill.count > numChosen) {
				availableSkills.push({
					skills: unchosen,
					count: careerSkill.count - numChosen,
				});
			}
		}
	}
	return availableSkills;
};

export const getRequiredSkillChoices = (char: Character): SkillName[] => {
	const career = getCurrentCareer(char);
	const careerSkills = careers[career].skills;
	const ownedSkills = getSkillList(char);

	const availableSkills = careerSkills.filter(
		(skill): skill is SkillName =>
			typeof skill == "string" &&
			ownedSkills.find((ownedSkill) => ownedSkill.skill == skill) == undefined
	);
	return availableSkills;
};

export const getFreeTalentChoices = (char: Character): TalentChoice[] => {
	const career = getCurrentCareer(char);
	const careerTalents = careers[career].talents;
	const availableTalents: TalentChoice[] = [];
	const ownedTalents = getTalentList(char);

	for (const careerTalent of careerTalents) {
		if (typeof careerTalent != "string") {
			const unchosen = careerTalent.talents.filter(
				(talent) =>
					ownedTalents.find((ownedTalent) => ownedTalent == talent) == undefined
			);
			const numChosen = careerTalent.talents.length - unchosen.length;
			if (careerTalent.count > numChosen) {
				availableTalents.push({
					talents: unchosen,
					count: careerTalent.count - numChosen,
				});
			}
		}
	}
	return availableTalents;
};

export const getStatChoices = (
	char: Character
): { stat: Stat; amount: number }[] => {
	const career = careers[char.career];
	const baseAdvances = { ...career.advances };
	for (const event of char.history) {
		if (event.type == "StatAdvance") {
			baseAdvances[event.stat] -= event.change;
		}
	}
	const advances: { stat: Stat; amount: number }[] = [];
	for (const stat in career.advances) {
		const amount = career.advances[stat as Stat];
		if (amount != 0) {
			advances.push({ stat: stat as Stat, amount: amount });
		}
	}
	return advances;
};
