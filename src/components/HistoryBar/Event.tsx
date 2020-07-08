import * as React from "react";
import { skills } from "../../data/skills";
import { EventHeader } from "./EventHeader";
import { HistoryEvent } from "../../store/state/history";
import { talents } from "../../data/talents";
import { StatFullNames } from "../../data/stats";

export function Event(props: {
	event: HistoryEvent;
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
		case "TalentAdvance":
			return (
				<div className="flexcol event">
					<EventHeader
						title="Learned Talent"
						remove={props.event.locked ? undefined : props.remove}
					/>
					<div className="content">{talents[props.event.talent].name}</div>
				</div>
			);
		case "StatAdvance":
			return (
				<div className="flexcol event">
					<EventHeader title="Improved Characteristic" remove={props.remove} />
					<div className="content">
						{StatFullNames[props.event.stat]} +{props.event.change}
					</div>
				</div>
			);
	}
}
