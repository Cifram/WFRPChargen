import * as React from "react";
import { State } from "../state/state";

export function CharacterList(props: { state: State }) {
	let characters = props.state.characters.map(char => <div>{char.name}</div>);
	console.log("Num characters " + props.state.characters.length);
	return <div className="flexcol">{characters}</div>;
}