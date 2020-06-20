import * as React from "react";
import { races } from "../../data/races";
import { careers } from "../../data/careers";
import { Character } from "../../store/state/character";

interface Props {
	charIndex: number;
	char: Character;
	selected: boolean;
	changeSelectedCharacter: (charIndex: number | null) => void;
}

export const CharacterListItem = (props: Props) => {
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
};
