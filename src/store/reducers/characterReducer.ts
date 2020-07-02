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
		case "REMOVE_SHALLYAS_MERCY":
			return {
				...state,
				shallyasMercy: null,
			};
		case "GAIN_SKILL":
			return {
				...state,
				history: [
					...state.history,
					{ type: "SkillAdvance", skill: action.skill, locked: action.locked },
				],
			};
		case "GAIN_TALENT":
			return {
				...state,
				history: [
					...state.history,
					{
						type: "TalentAdvance",
						talent: action.talent,
						locked: action.locked,
					},
				],
			};
		case "REMOVE_EVENT":
			return {
				...state,
				history: [
					...state.history.slice(0, action.eventIndex),
					...state.history.slice(action.eventIndex + 1, state.history.length),
				],
			};
		default:
			return state;
	}
}
