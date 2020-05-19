import * as React from "react";
import { State } from "../state/state";
import { races } from "../data/races";

export function CharacterListItem(props: { state: State, index: number }) {
	let containerStyle: React.CSSProperties = {
		backgroundColor: (props.index % 2 == 0) ? "#eeeeee" : "#ffffdd",
		padding: 5,
	}
	let nameStyle: React.CSSProperties = {
		fontSize: 18,
		fontFamily: "serif",
	}
	let dataStyle: React.CSSProperties = {
		fontSize: 12,
		fontFamily: "sans-serif",
	}
	let char = props.state.characters[props.index];
	return <div className="flexcol" style={containerStyle}>
		<div style={nameStyle}>{char.name}</div>
		<div style={dataStyle}>{races[char.race].name}</div>
	</div>
}