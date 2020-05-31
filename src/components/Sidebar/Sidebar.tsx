import * as React from "react";
import { State } from "../../state/state";
import { CharacterList } from "./CharacterList";
import { NewCharacter } from "./NewCharacter";

export function Sidebar(props: { state: State }) {
	return (
		<div className="flexcol sidebar">
			<NewCharacter state={props.state} />
			<div className="divider" />
			<CharacterList state={props.state} />
		</div>
	);
}
