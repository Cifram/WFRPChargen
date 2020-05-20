import * as React from "react";
import { State } from "../state/state";

export function NewCharacterSidebarButton(props: { state: State }) {
	let className = "listItem" + (props.state.selectedCharacter == null ? " selected" : "");
	let onClick = () => {
		props.state.selectedCharacter = null;
		props.state.dirty = true;
	}
	return <div className={className} onClick={onClick}>New Character</div>;
}