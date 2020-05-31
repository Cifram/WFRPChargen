import { PrimaryStat, SecondaryStat } from "../data/stats";

export type HistoryStatAdvance = {
	type: "StatAdvance";
	stat: PrimaryStat | SecondaryStat;
	change: number;
};
