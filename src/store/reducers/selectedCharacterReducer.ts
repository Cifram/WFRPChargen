import { Action } from "../actions/Action";

export function selectedCharacterReducer(
	state: number | null = null,
	action: Action
) {
	switch (action.type) {
		case "SELECT_CHARACTER":
			return action.index;
		default:
			return state;
	}
}
