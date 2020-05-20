import * as React from "react";
import { GenerateScreen } from "./GenerateScreen";
import { State } from "../state/state";
import { Sidebar } from "./Sidebar";

export function App(props: { state: State }) {
	return <div className="flexrow app">
		<Sidebar state={props.state} />
		<GenerateScreen state={props.state} />
	</div>;
}