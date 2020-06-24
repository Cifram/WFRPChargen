import * as React from "react";
import { SkillChoice } from "../../data/careers";

export const SkillChoiceAdvance = (props: { choice: SkillChoice }) => (
	<div className="flexcol event">
		<div className="title">
			Choose {props.choice.count} Skill{props.choice.count > 1 ? "s" : ""}
		</div>
		{props.choice.skills.map((skill) => (
			<div className="button" key={skill}>
				{skill}
			</div>
		))}
	</div>
);
