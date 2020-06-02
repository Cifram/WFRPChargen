import { HistoryStatAdvance, HistorySkillAdvance } from "./history";
import { RaceName, races } from "../data/races";
import { CareerName, careers } from "../data/careers";
import { StatBlock, PrimaryStatNames, PrimaryStat } from "../data/stats";
import { SkillName, SkillMastery } from "../data/skills";

export interface Character {
	name: string;
	race: RaceName;
	career: CareerName;
	history: HistoryStep[];
	birthplace: string;
	age: number;
	gender: "Male" | "Female";
	weight: number;
	height: number;
	statRolls: StatBlock;
	shallyasMercy: PrimaryStat | null;
	skillChoices: SkillName[];
}

export type HistoryStep = HistoryStatAdvance | HistorySkillAdvance;

export function calcStatBlock(char: Character): StatBlock {
	let race = races[char.race];
	let stats = Object.assign({}, char.statRolls);
	if (char.shallyasMercy != null) {
		stats[char.shallyasMercy] = 11;
	}
	for (let statName in PrimaryStatNames) {
		let stat = <PrimaryStat>statName;
		stats[stat] += race.baseStats[stat];
	}
	for (let event of char.history) {
		if (event.type == "StatAdvance") {
			stats[event.stat] += event.change;
		}
	}

	return stats;
}

export interface OwnedSkill {
	skill: SkillName;
	mastery: SkillMastery;
}

export function getSkillList(char: Character): OwnedSkill[] {
	let skills: OwnedSkill[] = [];
	let addSkill = (skill: SkillName) => {
		let ownedSkill = skills.find((ownedSkill) => ownedSkill.skill === skill);
		if (ownedSkill == undefined) {
			skills.push({ skill: skill, mastery: 0 });
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

	for (let skill of careers[char.career].skills) {
		if (typeof skill == "string") {
			addSkill(skill);
		}
	}
	for (let skill of char.skillChoices) {
		addSkill(skill);
	}
	for (let event of char.history) {
		if (event.type == "SkillAdvance") {
			addSkill(event.skill);
		}
	}
	return skills;
}
