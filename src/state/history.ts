import { PrimaryStat, SecondaryStat } from '../data/stats';

export type HistoryStatAdvance = {
	type: "StatAdvance";
	stat: PrimaryStat | SecondaryStat;
	change: number;
}

export type HistoryStatRolls = {
	[K in PrimaryStat]: number;
} & {
	type: "StatRolls";
	shallyasMercyStat: PrimaryStat | null;
}

export type HistorySecondaryStats = {
	[K in SecondaryStat]: number;
} & {
	type: "SecondaryStats";
}