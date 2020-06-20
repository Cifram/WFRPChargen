import * as React from "react";
import { State } from "../../store/state/state";
import { races } from "../../data/races";
import { careers } from "../../data/careers";
import { changeSelectedCharacter } from "../../store/actions/ChangeSelectedCharacter";
import { ConnectedProps, connect } from "react-redux";

interface OwnProps {
	charIndex: number;
}

const mapState = (state: State, props: OwnProps) => ({
	char: state.characters[props.charIndex],
	selected: props.charIndex == state.selectedCharacter,
});

const mapDispatch = {
	changeSelectedCharacter,
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector> & OwnProps;

export const CharacterListItem = connector((props: Props) => {
	let className = "flexcol listItem" + (props.selected ? " selected" : "");
	return (
		<div
			className={className}
			onClick={() => props.changeSelectedCharacter(props.charIndex)}
		>
			<div className="name">{props.char.name}</div>
			<div className="details">
				{races[props.char.race].name} {careers[props.char.career].name}
			</div>
		</div>
	);
});
