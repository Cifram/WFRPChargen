import { HistoryStatRolls, HistoryStatAdvance, HistorySecondaryStats } from './history';
import { RaceName } from '../data/races';

export interface Character {
	name: string;
	age: number;
	race: RaceName;
	history: HistoryStep[];
}

export type HistoryStep = HistoryStatRolls | HistorySecondaryStats | HistoryStatAdvance