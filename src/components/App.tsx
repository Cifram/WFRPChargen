import * as React from "react";
import { GenerateScreen } from "./GenerateScreen";
import { State } from "../state/state";
import { Sidebar } from "./Sidebar/Sidebar";
import { Screen as CharacterScreen } from "./CharacterScreen/Screen";

export function App(props: { state: State }) {
	let screen = props.state.selectedCharacter == null ?
		<GenerateScreen state={props.state} /> :
		<CharacterScreen state = {props.state} />;
	return <div className="flexrow app">
		<Sidebar state={props.state} />
		{screen}
	</div>;
}