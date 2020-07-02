import { TalentName } from "../../data/talents";
import { skills } from "../../data/skills";

export interface GainTalentAction {
	type: "GAIN_TALENT";
	charIndex: number;
	talent: TalentName;
	locked: boolean;
}

export const gainTalent = (
	charIndex: number,
	talent: TalentName,
	locked: boolean
): GainTalentAction => ({
	type: "GAIN_TALENT",
	charIndex: charIndex,
	talent: talent,
	locked: locked,
});
