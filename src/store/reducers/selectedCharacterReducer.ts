import { Action } from "../actions/Action";

export function selectedCharacterReducer(
	state: number | null = null,
	action: Action
) {
	switch (action.type) {
		case "CHANGE_SELECTED_CHARACTER":
			return action.index;
		default:
			return state;
	}
}
