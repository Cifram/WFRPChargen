import * as React from "react";
import { races } from "../../data/races";
import { careers } from "../../data/careers";
import { Character } from "../../store/state/character";

export function CharacterSection(props: { char: Character }) {
	return (
		<div className="flexcol block">
			<div className="header">CHARACTER</div>
			<div className="cell flexrow">
				<div className="title">NAME</div>
				<div className="content">{props.char.name}</div>
			</div>
			<div className="flexrow">
				<div className="cell flexrow">
					<div className="title">RACE</div>
					<div className="content">{races[props.char.race].name}</div>
				</div>
				<div className="cell flexrow">
					<div className="title">CAREER</div>
					<div className="content">{careers[props.char.career].name}</div>
				</div>
			</div>
		</div>
	);
}
