import { CharacterAdvancesPage } from "../state/character";

export interface ChangeAdvancesPageAction {
	type: "CHANGE_ADVANCES_SECTION";
	charIndex: number;
	section: CharacterAdvancesPage;
}

export const changeAdvancesPage = (
	charIndex: number,
	section: CharacterAdvancesPage
): ChangeAdvancesPageAction => ({
	type: "CHANGE_ADVANCES_SECTION",
	charIndex,
	section,
});
