import { PrimaryStat } from "../../data/stats";

export interface ApplyShallyasMercyAction {
	type: "APPLY_SHALLYAS_MERCY";
	charIndex: number;
	stat: PrimaryStat;
}

export const applyShallyasMercy = (
	charIndex: number,
	stat: PrimaryStat
): ApplyShallyasMercyAction => ({
	type: "APPLY_SHALLYAS_MERCY",
	charIndex: charIndex,
	stat: stat,
});
