export interface RemoveEventAction {
	type: "REMOVE_EVENT";
	charIndex: number;
	eventIndex: number;
}

export const removeEvent = (
	charIndex: number,
	eventIndex: number
): RemoveEventAction => ({
	type: "REMOVE_EVENT",
	charIndex: charIndex,
	eventIndex: eventIndex,
});
