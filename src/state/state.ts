import { Character } from "./character";

export interface State {
	characters: Character[];
	selectedCharacter: number | null;
	dirty: boolean;
}
