import { CharacterAdvanceBarState } from "../state/character";

export interface ChangeAdvancesPageAction {
	type: "CHANGE_ADVANCES_SECTION";
	charIndex: number;
	section: CharacterAdvanceBarState;
}

export const changeAdvancesPage = (
	charIndex: number,
	section: CharacterAdvanceBarState
): ChangeAdvancesPageAction => ({
	type: "CHANGE_ADVANCES_SECTION",
	charIndex,
	section,
});
