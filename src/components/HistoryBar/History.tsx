import * as React from "react";
import { Character, getAvailableSkills } from "../../state/character";
import { skills } from "../../data/skills";
import { PrimaryStatNames } from "../../data/stats";
import { races } from "../../data/races";
import { Event } from "./Event";
import { Advances } from "./Advances";
import { State } from "../../state/state";

export function History(props: { char: Character; state: State }) {
	let eventIndex = 0;
	let history = props.char.history.map((event) => {
		eventIndex++;
		return <Event key={eventIndex} event={event} />;
	});

	let shallyasMercy = PrimaryStatNames.filter(
		(stat) => props.char.statRolls[stat] < 11
	).map((stat) => (
		<div key={stat} className="content">
			{stat}{" "}
			{props.char.statRolls[stat] + races[props.char.race].baseStats[stat]} →{" "}
			{11 + races[props.char.race].baseStats[stat]}
		</div>
	));
	if (shallyasMercy.length == 0) {
		shallyasMercy = [<div className="content">Not applicable</div>];
	}

	return (
		<div className="flexcol history">
			<div className="header">HISTORY</div>
			<div className="flexcol event">
				<div className="title">Shallya's Mercy</div>
				{shallyasMercy}
			</div>
			{history}
			<div className="header">ADVANCES</div>
			<Advances char={props.char} state={props.state} />
		</div>
	);
}
