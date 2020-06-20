import * as React from "react";

interface Props {
	selected: boolean;
	changeSelectedCharacter: (charIndex: number | null) => void;
}

export const NewCharacter = (props: Props) => (
	<div
		className={"listItem" + (props.selected ? " selected" : "")}
		onClick={() => props.changeSelectedCharacter(null)}
	>
		New Character
	</div>
);
