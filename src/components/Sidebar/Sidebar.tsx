import * as React from "react";
import { CharacterList } from "./CharacterList";
import { NewCharacter } from "./NewCharacter";
import { State } from "../../store/state/state";
import { selectCharacter } from "../../store/actions/SelectCharacter";
import { connect, ConnectedProps } from "react-redux";

const mapState = (state: State) => ({
	selectedCharIndex: state.selectedCharacter,
	characters: state.characters,
});

const mapDispatch = {
	selectCharacter,
};

const connector = connect(mapState, mapDispatch);

interface Props extends ConnectedProps<typeof connector> {}

export const Sidebar = connector((props: Props) => {
	return (
		<div className="flexcol sidebar">
			<NewCharacter
				selected={props.selectedCharIndex == null}
				changeSelectedCharacter={props.selectCharacter}
			/>
			<div className="divider" />
			<CharacterList
				selectedChar={props.selectedCharIndex}
				characters={props.characters}
				changeSelectedCharacter={props.selectCharacter}
			/>
		</div>
	);
});
