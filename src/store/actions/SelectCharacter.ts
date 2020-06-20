export interface SelectCharacterAction {
	type: "SELECT_CHARACTER";
	index: number | null;
}

export const selectCharacter = (
	index: number | null
): SelectCharacterAction => ({
	type: "SELECT_CHARACTER",
	index,
});
