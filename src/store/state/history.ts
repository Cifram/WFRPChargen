import { PrimaryStat, SecondaryStat } from "../../data/stats";
import { SkillName } from "../../data/skills";

export interface HistoryStatAdvance {
	type: "StatAdvance";
	stat: PrimaryStat | SecondaryStat;
	change: number;
}

export interface HistorySkillAdvance {
	type: "SkillAdvance";
	skill: SkillName;
}
