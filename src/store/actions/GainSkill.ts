import { SkillName } from "../../data/skills";

export interface GainSkillAction {
	type: "GAIN_SKILL";
	charIndex: number;
	skill: SkillName;
}

export const gainSkill = (
	charIndex: number,
	skill: SkillName
): GainSkillAction => ({
	type: "GAIN_SKILL",
	charIndex: charIndex,
	skill: skill,
});
