import * as React from "react";
import { GenerateScreen } from "./GenerateScreen";
import { Sidebar } from "./Sidebar/Sidebar";
import { CharacterScreen } from "./CharacterScreen/CharacterScreen";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../store/state/state";

const mapState = (state: State) => ({
	char:
		state.selectedCharacter == null
			? null
			: state.characters[state.selectedCharacter],
});

const connector = connect(mapState);

interface Props extends ConnectedProps<typeof connector> {}

export const App = connector((props: Props) => (
	<div className="flexrow app">
		<Sidebar />
		{props.char != null ? (
			<CharacterScreen char={props.char} />
		) : (
			<GenerateScreen />
		)}
	</div>
));
