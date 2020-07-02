import { RaceName, races } from "./data/races";
import { Character, CharacterAdvancesPage } from "./store/state/character";
import { d10, d100, d1000 } from "./dice";
import { StatBlock } from "./data/stats";
import { careers } from "./data/careers";
import {
	HistoryEvent,
	HistorySkillAdvance,
	HistoryTalentAdvance,
} from "./store/state/history";
import { SkillName } from "./data/skills";
import { TalentName } from "./data/talents";

export function generate(race: RaceName, gender: "Male" | "Female"): Character {
	const rolls: StatBlock = {
		WS: d10() + d10(),
		BS: d10() + d10(),
		S: d10() + d10(),
		T: d10() + d10(),
		Ag: d10() + d10(),
		Int: d10() + d10(),
		WP: d10() + d10(),
		Fel: d10() + d10(),
		A: 1,
		W: races[race].baseWoundTable[d10() - 1],
		SB: 0,
		TB: 0,
		MV: races[race].baseMovement,
		Mag: 0,
		IP: 0,
		FP: races[race].baseFatePointTable[d10() - 1],
	};
	const career = races[race].careerTable[d1000() - 1];
	const history: HistoryEvent[] = [
		...careers[career].skills
			.filter((skill): skill is SkillName => typeof skill == "string")
			.map(
				(skill): HistorySkillAdvance => ({
					type: "SkillAdvance",
					skill: skill,
					locked: true,
				})
			),
		...careers[career].talents
			.filter((talent): talent is TalentName => typeof talent == "string")
			.map(
				(talent): HistoryTalentAdvance => ({
					type: "TalentAdvance",
					talent: talent,
					locked: true,
				})
			),
	];
	return {
		name: "Foo Barson",
		race: race,
		career: career,
		history: history,
		birthplace: races[race].birthplace(),
		age: Math.ceil(d100() / 5) * races[race].ageStep + races[race].baseAge,
		gender: gender,
		weight: races[race].weightTable[d100() - 1],
		height:
			(gender == "Male"
				? races[race].baseHeightMale
				: races[race].baseHeightFemale) + d10(),
		statRolls: rolls,
		shallyasMercy: null,
		uiState: {
			advanceBarState: CharacterAdvancesPage.Root,
		},
	};
}
