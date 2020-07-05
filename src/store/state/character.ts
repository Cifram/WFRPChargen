import {
	HistoryStatAdvance,
	HistorySkillAdvance,
	HistoryEvent,
	HistoryTalentAdvance,
} from "./history";
import { RaceName, races } from "../../data/races";
import {
	CareerName,
	careers,
	SkillChoice,
	TalentChoice,
} from "../../data/careers";
import { StatBlock, PrimaryStatNames, PrimaryStat } from "../../data/stats";
import { SkillName, SkillMastery } from "../../data/skills";
import { TalentName, talents } from "../../data/talents";

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

export const calcStatBlock = (char: Character): StatBlock => {
	const race = races[char.race];
	const stats = Object.assign({}, char.statRolls);
	if (char.shallyasMercy != null) {
		stats[char.shallyasMercy] = 11;
	}
	for (const statName of PrimaryStatNames) {
		const stat = <PrimaryStat>statName;
		stats[stat] += race.baseStats[stat];
	}
	for (const event of char.history) {
		if (event.type == "StatAdvance") {
			stats[event.stat] += event.change;
		}
	}
	stats.SB += Math.floor(stats.S / 10);
	stats.TB += Math.floor(stats.T / 10);

	return stats;
};

export interface SkillBonus {
	bonus: number;
	desc: string;
}

export interface OwnedSkill {
	skill: SkillName;
	mastery: SkillMastery;
	bonuses: SkillBonus[];
	sitBonuses: SkillBonus[];
}

export const getSkillList = (char: Character): OwnedSkill[] => {
	const ownedTalents = getTalentList(char);
	const skills: OwnedSkill[] = [];
	const addSkill = (skill: SkillName) => {
		const ownedSkill = skills.find((ownedSkill) => ownedSkill.skill === skill);
		if (ownedSkill == undefined) {
			const bonuses: SkillBonus[] = [];
			const sitBonuses: SkillBonus[] = [];
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

export const getRequiredSkills = (char: Character): SkillName[] => {
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
