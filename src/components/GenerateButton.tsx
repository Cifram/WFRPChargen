import * as React from "react";
import { State } from "../state/state";
import { races, RaceName } from "../data/races";
import { generate } from "../generate";

export function GenerateButton(props: { state: State, race: RaceName }) {
	let onClick = () => {
		props.state.characters.push(generate(props.race));
		props.state.dirty = true;
	}
	return <button style={{ flexGrow: 1 }} onClick={onClick}>
		Generate<br />{races[props.race].name}
	</button>
};