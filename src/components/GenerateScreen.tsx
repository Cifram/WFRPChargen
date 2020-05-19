import * as React from "react";
import { State } from "../state/state";
import { races } from "../data/races";
import { GenerateRace } from "./GenerateRace";

export function GenerateScreen(props: { state: State }) {
	return <div style={{ display: "flex", flexDirection: "row" }}>
		<GenerateRace state={props.state} race="Human" />
		<GenerateRace state={props.state} race="Elf" />
		<GenerateRace state={props.state} race="Dwarf" />
		<GenerateRace state={props.state} race="Halfling" />
	</div>
};