import * as React from "react";
import { State } from "../../store/state/state";
import { connect, ConnectedProps } from "react-redux";
import { changeSelectedCharacter } from "../../store/actions/ChangeSelectedCharacter";

const mapDispatch = {
	changeSelectedCharacter,
};

const connector = connect(undefined, mapDispatch);

interface Props extends ConnectedProps<typeof connector> {
	selectedCharacter: number | null;
}

export const NewCharacter = connector((props: Props) => (
	<div
		className={
			"listItem" + (props.selectedCharacter == null ? " selected" : "")
		}
		onClick={() => props.changeSelectedCharacter(null)}
	>
		New Character
	</div>
));
