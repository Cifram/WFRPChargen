import * as React from "react";
import { Character, CharacterAdvanceBarState } from "../../state/character";
import { State } from "../../state/state";

export function Advances(props: { char: Character; state: State }) {
	const gotoSection = (section: CharacterAdvanceBarState) => {
		props.char.uiState.advanceBarState = section;
		props.state.dirty = true;
	};
	const uiState = props.char.uiState.advanceBarState;
	if (uiState == CharacterAdvanceBarState.Root) {
		return (
			<div className="flexCol">
				<div
					className="sectionButton"
					onClick={() => gotoSection(CharacterAdvanceBarState.FreeAdvances)}
				>
					Free Advances
				</div>
				<div
					className="sectionButton"
					onClick={() => gotoSection(CharacterAdvanceBarState.RequiredAdvances)}
				>
					Required Advances
				</div>
				<div
					className="sectionButton"
					onClick={() => gotoSection(CharacterAdvanceBarState.OptionalAdvances)}
				>
					Optional Advances
				</div>
				<div
					className="sectionButton"
					onClick={() => gotoSection(CharacterAdvanceBarState.OtherChanges)}
				>
					Other Changes
				</div>
			</div>
		);
	}
	const sectionTitle =
		uiState == CharacterAdvanceBarState.FreeAdvances
			? "Free Advances"
			: uiState == CharacterAdvanceBarState.RequiredAdvances
			? "Required Advances"
			: uiState == CharacterAdvanceBarState.OptionalAdvances
			? "Optional Advances"
			: "Other Changes";
	return (
		<div className="flexcol">
			<div
				className="flexrow subheader"
				onClick={() => gotoSection(CharacterAdvanceBarState.Root)}
			>
				← {sectionTitle}
			</div>
		</div>
	);
}
