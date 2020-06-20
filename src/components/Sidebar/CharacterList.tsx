import * as React from "react";
import { State } from "../../store/state/state";
import { CharacterListItem } from "./CharacterListItem";
import { connect, ConnectedProps } from "react-redux";

const mapState = (state: State) => ({
	charIndex: state.selectedCharacter,
	characters: state.characters,
});

const connector = connect(mapState);

interface Props extends ConnectedProps<typeof connector> {}

export const CharacterList = connector((props: Props) => {
	let characters: JSX.Element[] = [];
	for (let i = 0; i < props.characters.length; i++) {
		let char = props.characters[i];
		let key = char.name + ", " + char.race + ", " + char.career;
		characters.push(<CharacterListItem charIndex={i} key={key} />);
	}
	console.log("Num characters " + props.characters.length);
	return <div className="flexcol">{characters}</div>;
});
