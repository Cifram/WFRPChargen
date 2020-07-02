import * as React from "react";
import { CharacterListItem } from "./CharacterListItem";
import { Character } from "../../store/state/character";

interface Props {
	selectedChar: number | null;
	characters: Character[];
	changeSelectedCharacter: (charIndex: number | null) => void;
}

export const CharacterList = (props: Props) => {
	const characters: JSX.Element[] = [];
	for (let i = 0; i < props.characters.length; i++) {
		const char = props.characters[i];
		characters.push(
			<CharacterListItem
				charIndex={i}
				char={char}
				selected={i == props.selectedChar}
				changeSelectedCharacter={props.changeSelectedCharacter}
				key={i}
			/>
		);
	}
	console.log("Num characters " + props.characters.length);
	return <div className="flexcol">{characters}</div>;
};
