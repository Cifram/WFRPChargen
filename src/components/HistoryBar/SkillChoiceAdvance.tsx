import * as React from "react";
import { SkillChoice } from "../../data/careers";
import { SkillName } from "../../data/skills";
import { GainSkillAction } from "../../store/actions/GainSkill";

export const SkillChoiceAdvance = (props: {
	choice: SkillChoice;
	charIndex: number;
	gainSkill: (charIndex: number, skill: SkillName) => GainSkillAction;
}) => (
	<div className="flexcol event">
		<div className="title">
			Choose {props.choice.count} Skill{props.choice.count > 1 ? "s" : ""}
		</div>
		{props.choice.skills.map((skill) => (
			<div
				className="button"
				onClick={() => props.gainSkill(props.charIndex, skill)}
				key={skill}
			>
				{skill}
			</div>
		))}
	</div>
);
