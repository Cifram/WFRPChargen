import { Character } from './character'

export interface State {
	characters: Character[];
	dirty: boolean;
}