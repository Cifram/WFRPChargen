import * as React from "react";
import { State } from "../state/state";
import { CharacterListItem } from "./CharacterListItem";

export function CharacterList(props: { state: State }) {
	let characters: JSX.Element[] = [];
	for (let i = 0; i < props.state.characters.length; i++) {
		let char = props.state.characters[i]
		let key = char.name + ", " + char.race + ", " + char.age;
		characters.push(<CharacterListItem state={props.state} index={i} key={key} />);
	}
	console.log("Num characters " + props.state.characters.length);
	return <div className="flexcol">{characters}</div>;
}