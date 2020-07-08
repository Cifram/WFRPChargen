import { Stat } from "../../data/stats";

export interface AdvanceStat {
	type: "ADVANCE_STAT";
	charIndex: number;
	stat: Stat;
	amount: number;
}

export const advanceStat = (
	charIndex: number,
	stat: Stat,
	amount: number
): AdvanceStat => ({
	type: "ADVANCE_STAT",
	charIndex: charIndex,
	stat: stat,
	amount: amount,
});
