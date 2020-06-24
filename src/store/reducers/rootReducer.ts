import { combineReducers } from "redux";
import { charactersReducer } from "./charactersReducer";
import { selectedCharacterReducer } from "./selectedCharacterReducer";

export let rootReducer = combineReducers({
	characters: charactersReducer,
	selectedCharacter: selectedCharacterReducer,
});
