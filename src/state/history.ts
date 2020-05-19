import { PrimaryStat, SecondaryStat } from '../data/stats';

export class HistoryStatAdvance {
	stat: PrimaryStat | SecondaryStat = "WS";
	change: number = 0;
}

export type HistoryStatRolls = {
	[K in PrimaryStat]: number;
} & {
	shallyasMercyStat: PrimaryStat | null;
}

export type HistorySecondaryStats = {
	[K in SecondaryStat]: number;
}