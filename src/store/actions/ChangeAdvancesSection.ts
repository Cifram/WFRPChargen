import { CharacterAdvanceBarState } from "../state/character";

export interface ChangeAdvancesSectionAction {
	type: "CHANGE_ADVANCES_SECTION";
	charIndex: number;
	section: CharacterAdvanceBarState;
}

export const changeAdvancesSection = (
	charIndex: number,
	section: CharacterAdvanceBarState
): ChangeAdvancesSectionAction => ({
	type: "CHANGE_ADVANCES_SECTION",
	charIndex,
	section,
});
