import { SkillName } from "../../data/skills";

export interface GainSkillAction {
	type: "GAIN_SKILL";
	charIndex: number;
	skill: SkillName;
	locked: boolean;
}

export const gainSkill = (
	charIndex: number,
	skill: SkillName,
	locked: boolean
): GainSkillAction => ({
	type: "GAIN_SKILL",
	charIndex: charIndex,
	skill: skill,
	locked: locked,
});
