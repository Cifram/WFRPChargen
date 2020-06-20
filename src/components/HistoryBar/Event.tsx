import * as React from "react";
import { HistoryStep } from "../../store/state/character";
import { skills } from "../../data/skills";

export function Event(props: { event: HistoryStep }): JSX.Element {
	switch (props.event.type) {
		case "SkillAdvance":
			return (
				<div className="flexcol event">
					<div className="title">Learned Skill</div>
					<div className="content">{skills[props.event.skill].name}</div>
				</div>
			);
		case "StatAdvance":
			return (
				<div className="flexcol event">
					<div className="title">Improved Characteristic</div>
					<div className="content">
						{props.event.stat} +{props.event.change}
					</div>
				</div>
			);
	}
}
