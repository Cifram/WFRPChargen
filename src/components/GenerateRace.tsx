import * as React from "react";
import { State } from "../state/state";
import { races, RaceName } from "../data/races";

export function GenerateRace(props: { state: State, race: RaceName }) {
	return <button style={{ flexGrow: 1, }}>
		Generate<br />{races[props.race].name}
	</button>
};