import * as React from "react";
import { SkillChoice } from "../../data/careers";
import { SkillName, skills } from "../../data/skills";
import { GainSkillAction } from "../../store/actions/GainSkill";

export const SkillChoiceAdvance = (props: {
	choice: SkillChoice;
	gainSkill: (skill: SkillName) => GainSkillAction;
}) => (
	<div className="flexcol event">
		<div className="title">
			Choose {props.choice.count} Skill{props.choice.count > 1 ? "s" : ""}
		</div>
		{props.choice.skills.map((skill) => (
			<div
				className="button"
				onClick={() => props.gainSkill(skill)}
				title={`${skills[skill].type} skill, based on ${skills[skill].characteristic}`}
				key={skill}
			>
				{skills[skill].name}
			</div>
		))}
	</div>
);
