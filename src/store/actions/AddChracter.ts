import { Character } from "../state/character";

export interface AddCharacterAction {
	type: "ADD_CHARACTER";
	char: Character;
}

export function addCharacter(char: Character): AddCharacterAction {
	return {
		type: "ADD_CHARACTER",
		char,
	};
}
