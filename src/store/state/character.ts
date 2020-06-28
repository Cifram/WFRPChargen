import { HistoryStatAdvance, HistorySkillAdvance } from "./history";
import { RaceName, races } from "../../data/races";
import { CareerName, careers, SkillChoice } from "../../data/careers";
import { StatBlock, PrimaryStatNames, PrimaryStat } from "../../data/stats";
import { SkillName, SkillMastery } from "../../data/skills";

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
	uiState: CharacterUiState;
}

export type HistoryStep = HistoryStatAdvance | HistorySkillAdvance;

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

export function calcStatBlock(char: Character): StatBlock {
	let race = races[char.race];
	let stats = Object.assign({}, char.statRolls);
	if (char.shallyasMercy != null) {
		stats[char.shallyasMercy] = 11;
	}
	for (let statName of PrimaryStatNames) {
		let stat = <PrimaryStat>statName;
		stats[stat] += race.baseStats[stat];
	}
	for (let event of char.history) {
		if (event.type == "StatAdvance") {
			stats[event.stat] += event.change;
		}
	}
	stats.SB += Math.floor(stats.S / 10);
	stats.TB += Math.floor(stats.T / 10);

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

	for (let event of char.history) {
		if (event.type == "SkillAdvance") {
			addSkill(event.skill);
		}
	}
	return skills;
}

export function getCurrentCareer(char: Character): CareerName {
	return char.career;
}

export function getFreeSkillChoices(char: Character): SkillChoice[] {
	let career = getCurrentCareer(char);
	let careerSkills = careers[career].skills;
	let availableSkills: SkillChoice[] = [];
	let ownedSkills = getSkillList(char);

	for (let careerSkill of careerSkills) {
		if (typeof careerSkill != "string") {
			var unchosen: SkillName[] = [];
			for (let skill of careerSkill.skills) {
				let found = ownedSkills.find((ownedSkill) => ownedSkill.skill == skill);
				if (found == undefined) {
					unchosen.push(skill);
				}
			}

			var numChosen = careerSkill.skills.length - unchosen.length;
			if (careerSkill.count > numChosen) {
				availableSkills.push({
					skills: unchosen,
					count: careerSkill.count - numChosen,
				});
			}
		}
	}
	return availableSkills;
}

export function getRequiredSkills(char: Character): SkillName[] {
	let career = getCurrentCareer(char);
	let careerSkills = careers[career].skills;
	let availableSkills: SkillName[] = [];
	let ownedSkills = getSkillList(char);

	for (let careerSkill of careerSkills) {
		if (typeof careerSkill == "string") {
			let found = ownedSkills.find(
				(ownedSkill) => ownedSkill.skill == careerSkill
			);

			if (found == undefined) {
				availableSkills.push(careerSkill);
			}
		}
	}
	return availableSkills;
}
