import * as React from "react";
import { State } from "../state/state";
import { races } from "../data/races";
import { careers } from "../data/careers";
import { CharacterSection } from "./CharacterSection";
import { StatsSection } from "./StatsSection";

export function CharacterScreen(props: { state: State }) {
	if (props.state.selectedCharacter == null) {
		return <h1>Error: No character selected</h1>;
	}

	let character = props.state.characters[props.state.selectedCharacter];
	return <div className="flexcol characterScreen">
		<CharacterSection char={character} />
		<StatsSection char={character} />
	</div>
}