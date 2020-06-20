import { Character } from "../state/character";
import { Action } from "../actions/Action";

export function characterReducer(state: Character, action: Action): Character {
	switch (action.type) {
		case "CHANGE_ADVANCES_SECTION":
			return {
				...state,
				uiState: {
					...state.uiState,
					advanceBarState: action.section,
				},
			};
		case "APPLY_SHALLYAS_MERCY":
			return {
				...state,
				shallyasMercy: action.stat,
			};
		default:
			return state;
	}
}
