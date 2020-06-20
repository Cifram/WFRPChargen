import * as React from "react";
import { CharacterList } from "./CharacterList";
import { NewCharacter } from "./NewCharacter";

export const Sidebar = (props: { selectedCharacter: number | null }) => {
	return (
		<div className="flexcol sidebar">
			<NewCharacter selectedCharacter={props.selectedCharacter} />
			<div className="divider" />
			<CharacterList />
		</div>
	);
};
