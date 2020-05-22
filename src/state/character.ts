import { HistoryStatRolls, HistoryStatAdvance, HistorySecondaryStats } from './history';
import { RaceName } from '../data/races';
import { CareerName } from '../data/careers';

export interface Character {
	name: string;
	age: number;
	race: RaceName;
	career: CareerName;
	history: HistoryStep[];
}

export type HistoryStep = HistoryStatRolls | HistorySecondaryStats | HistoryStatAdvance;