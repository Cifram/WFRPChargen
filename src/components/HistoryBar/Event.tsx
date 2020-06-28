import * as React from "react";
import { HistoryStep } from "../../store/state/character";
import { skills } from "../../data/skills";
import { EventHeader } from "./EventHeader";

export function Event(props: {
	event: HistoryStep;
	remove: () => void;
}): JSX.Element {
	switch (props.event.type) {
		case "SkillAdvance":
			return (
				<div className="flexcol event">
					<EventHeader
						title="Learned Skill"
						remove={props.event.locked ? undefined : props.remove}
					/>
					<div className="content">{skills[props.event.skill].name}</div>
				</div>
			);
		case "StatAdvance":
			return (
				<div className="flexcol event">
					<EventHeader title="Improved Characteristic" />
					<div className="content">
						{props.event.stat} +{props.event.change}
					</div>
				</div>
			);
	}
}
