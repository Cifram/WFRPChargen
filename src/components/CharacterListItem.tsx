import * as React from "react";
import { State } from "../state/state";
import { races } from "../data/races";
import { careers } from "../data/careers";

export function CharacterListItem(props: { state: State, index: number }) {
	let onClick = () => {
		props.state.selectedCharacter = props.index;
		props.state.dirty = true;
	}

	let className = "flexcol listItem" + (props.index == props.state.selectedCharacter ? " selected" : "");
	let char = props.state.characters[props.index];
	return <div className={className} onClick={onClick}>
		<div className="name">{char.name}</div>
		<div className="details">{races[char.race].name} {careers[char.career].name}</div>
	</div>;
}