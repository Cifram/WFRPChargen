import { Character } from "../state/character";
import { Action } from "../actions/Action";
import { characterReducer } from "./characterReducer";

export function charactersReducer(
	state: Character[] = [],
	action: Action
): Character[] {
	switch (action.type) {
		case "ADD_CHARACTER":
			return [...state, action.char];
		default:
			if ("charIndex" in action) {
				const newChar = characterReducer(state[action.charIndex], action);
				if (state[action.charIndex] != newChar) {
					return state.map((char, index) =>
						index == action.charIndex ? newChar : char
					);
				}
			}
			return state;
	}
}
