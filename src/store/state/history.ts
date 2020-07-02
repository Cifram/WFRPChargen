import { PrimaryStat, SecondaryStat } from "../../data/stats";
import { SkillName } from "../../data/skills";
import { TalentName } from "../../data/talents";

export interface HistoryStatAdvance {
	type: "StatAdvance";
	stat: PrimaryStat | SecondaryStat;
	change: number;
}

export interface HistorySkillAdvance {
	type: "SkillAdvance";
	skill: SkillName;
	locked: boolean;
}

export interface HistoryTalentAdvance {
	type: "TalentAdvance";
	talent: TalentName;
	locked: boolean;
}

export type HistoryEvent =
	| HistoryStatAdvance
	| HistorySkillAdvance
	| HistoryTalentAdvance;
