export interface RemoveShallyasMercyAction {
	type: "REMOVE_SHALLYAS_MERCY";
	charIndex: number;
}

export const removeShallyasMercy = (
	charIndex: number
): RemoveShallyasMercyAction => ({
	type: "REMOVE_SHALLYAS_MERCY",
	charIndex: charIndex,
});
