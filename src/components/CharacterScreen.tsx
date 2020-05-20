import * as React from "react";
import { State } from "../state/state";
import { races } from "../data/races";

export function CharacterScreen(props: { state: State }) {
	if (props.state.selectedCharacter == null) {
		return <h1>Error: No character selected</h1>;
	}

	let character = props.state.characters[props.state.selectedCharacter];
	return <div className="flexcol characterScreen">
		<div className="flexcol block">
			<div className="header">CHARACTER</div>
			<div className="flexrow">
				<div className="cell flexrow">
					<div className="title">NAME</div>
					<div className="content">{character.name}</div>
				</div>
				<div className="cell flexrow">
					<div className="title">RACE</div>
					<div className="content">{races[character.race].name}</div>
				</div>
			</div>
		</div>
	</div>
}