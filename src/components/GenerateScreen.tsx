import * as React from "react";
import { State } from "../state/state";
import { GenerateButton } from "./GenerateButton";

export function GenerateScreen(props: { state: State }) {
	return <div className="flexrow" style={{ flex: 1, alignItems: "flex-start" }}>
		<GenerateButton state={props.state} race="Human" />
		<GenerateButton state={props.state} race="Elf" />
		<GenerateButton state={props.state} race="Dwarf" />
		<GenerateButton state={props.state} race="Halfling" />
	</div>
};