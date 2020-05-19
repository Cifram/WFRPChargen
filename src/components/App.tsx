import * as React from "react";
import { GenerateScreen } from "./GenerateScreen";
import { State } from "../state/state";

export function App(props: { state: State }) {
	return <div>
		<h1>Warhammer Fantasy Character Generator</h1>
		<GenerateScreen state={props.state} />
	</div>;
}