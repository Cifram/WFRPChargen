export interface ChangeSelectedCharacterAction {
	type: "CHANGE_SELECTED_CHARACTER";
	index: number | null;
}

export const changeSelectedCharacter = (
	index: number | null
): ChangeSelectedCharacterAction => ({
	type: "CHANGE_SELECTED_CHARACTER",
	index,
});
