import * as React from "react";
import { State } from "../state/state";
import { CharacterList } from "./CharacterList";
import { NewCharacterSidebarButton } from "./NewCharacterSidebarButton";

export function Sidebar(props: { state: State }) {
	return <div className="flexcol sidebar">
		<NewCharacterSidebarButton state={props.state} />
		<div className="divider" />
		<CharacterList state={props.state} />
	</div>
}