import { PrimaryStatBlock } from './stats';

export type D10Table = { [K in 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10]: number };

export interface Race {
	name: string;
	baseStats: PrimaryStatBlock;
	baseWoundTable: D10Table;
	baseFatePointTable: D10Table;
	baseMovement: number;
}

export type RaceName = "Human" | "Elf" | "Dwarf" | "Halfling"

export const races: { [K in RaceName] : Race } = {
	"Human": {
		name: "Human",
		baseStats: { WS: 20, BS: 20, S: 20, T: 20, AG: 20, INT: 20, WP: 20, FEL: 20 },
		baseWoundTable: { 1: 10, 2: 10, 3: 10, 4: 11, 5: 11, 6: 11, 7: 12, 8: 12, 9: 12, 10: 13 },
		baseFatePointTable: { 1: 2, 2: 2, 3: 2, 4: 2, 5: 3, 6: 3, 7: 3, 8: 3, 9: 3, 10: 3 },
		baseMovement: 4,
	},
	"Elf": {
		name: "Elf",
		baseStats: { WS: 20, BS: 30, S: 20, T: 20, AG: 30, INT: 20, WP: 20, FEL: 20 },
		baseWoundTable: { 1: 9, 2: 9, 3: 9, 4: 10, 5: 10, 6: 10, 7: 11, 8: 11, 9: 11, 10: 12 },
		baseFatePointTable: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 2, 6: 2, 7: 2, 8: 2, 9: 2, 10: 2 },
		baseMovement: 5,
	},
	"Dwarf": {
		name: "Dwarf",
		baseStats: { WS: 30, BS: 20, S: 20, T: 30, AG: 10, INT: 20, WP: 20, FEL: 10 },
		baseWoundTable: { 1: 11, 2: 11, 3: 11, 4: 12, 5: 12, 6: 12, 7: 13, 8: 13, 9: 13, 10: 14 },
		baseFatePointTable: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 2, 6: 2, 7: 2, 8: 3, 9: 3, 10: 3 },
		baseMovement: 3,
	},
	"Halfling": {
		name: "Halfling",
		baseStats: { WS: 10, BS: 30, S: 10, T: 10, AG: 30, INT: 20, WP: 20, FEL: 30 },
		baseWoundTable: { 1: 8, 2: 8, 3: 8, 4: 9, 5: 9, 6: 9, 7: 10, 8: 10, 9: 10, 10: 11 },
		baseFatePointTable: { 1: 2, 2: 2, 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 3, 9: 3, 10: 3 },
		baseMovement: 4,
	},
};