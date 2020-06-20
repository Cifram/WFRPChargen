import * as React from "react";
import { Character } from "../../store/state/character";
import { races } from "../../data/races";
import { Event } from "./Event";
import { Advances } from "./Advances";

export function History(props: { char: Character }) {
	let eventIndex = 0;
	let history = props.char.history.map((event) => {
		eventIndex++;
		return <Event key={eventIndex} event={event} />;
	});

	return (
		<div className="flexcol history">
			<div className="historySection">
				<div className="header">HISTORY</div>
				{props.char.shallyasMercy == null ? (
					""
				) : (
					<div className="flexcol event">
						<div className="title">Shallya's Mercy</div>
						<div className="content">
							{props.char.shallyasMercy}{" "}
							{props.char.statRolls[props.char.shallyasMercy] +
								races[props.char.race].baseStats[props.char.shallyasMercy]}
							→{11 + races[props.char.race].baseStats[props.char.shallyasMercy]}
						</div>
					</div>
				)}
				{history}
			</div>
			<div className="advancesSection">
				<div className="header">ADVANCES</div>
				<Advances />
			</div>
		</div>
	);
}
