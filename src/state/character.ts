import { HistoryStatAdvance } from './history';
import { RaceName, races } from '../data/races';
import { CareerName } from '../data/careers';
import { StatBlock, PrimaryStatNames, PrimaryStat } from '../data/stats';

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
}

export type HistoryStep = HistoryStatAdvance;

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