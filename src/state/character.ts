import { HistoryStatRolls, HistoryStatAdvance, HistorySecondaryStats } from './history';
import { RaceName, races } from '../data/races';
import { CareerName } from '../data/careers';
import { StatBlock, SecondaryStatNames, SecondaryStat, PrimaryStatNames, PrimaryStat } from '../data/stats';

export interface Character {
	name: string;
	age: number;
	race: RaceName;
	career: CareerName;
	history: HistoryStep[];
}

export type HistoryStep = HistoryStatRolls | HistorySecondaryStats | HistoryStatAdvance;

export function calcStatBlock(char: Character): StatBlock {
	let race = races[char.race];
	let stats: StatBlock = {
		...race.baseStats,
		A: 0, W: 0, SB: 0, TB: 0, MV: 0, MAG: 0, IP: 0, FP: 0
	};
	for (let event of char.history) {
		if (event.type == "SecondaryStats") {
			for (let statName in SecondaryStatNames) {
				let stat = <SecondaryStat>statName;
				stats[stat] = event[stat];
			}
		} else if (event.type == "StatRolls") {
			for (let statName in PrimaryStatNames) {
				let stat = <PrimaryStat>statName;
				stats[stat] += event[stat];
			}
		} else if (event.type == "StatAdvance") {
			stats[event.stat] += event.change;
		}
	}

	return stats;
}