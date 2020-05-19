import * as React from "react";
import { State } from "../state/state";
import { CharacterList } from "./CharacterList";

export function Sidebar(props: { state: State }) {
	return <div className="flexcol" style={{ width: 200, flex: "none" }}>
		<div>Generate</div>
		<div>Characters</div>
		<CharacterList state={props.state} />
	</div>
}