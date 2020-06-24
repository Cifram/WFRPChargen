import * as React from "react";
import { CharacterAdvancesPage } from "../../store/state/character";
import { applyShallyasMercy } from "../../store/actions/ApplyShallyasMercy";
import { changeAdvancesPage } from "../../store/actions/ChangeAdvancesPage";
import { ConnectedProps, connect } from "react-redux";
import { State } from "../../store/state/state";
import { AdvancesPageSelection } from "./AdvancesPageSelection";
import { FreeAdvancesPage } from "./FreeAdvancesPage";

const mapState = (state: State) => {
	if (state.selectedCharacter == null) {
		throw "Somehow rendering Advances component with no character selected";
	}
	return {
		charIndex: state.selectedCharacter,
		char: state.characters[state.selectedCharacter],
	};
};

const mapDispatch = {
	changeAdvancesPage: changeAdvancesPage,
	applyShallyasMercy,
};

const connector = connect(mapState, mapDispatch);
interface Props extends ConnectedProps<typeof connector> {}

export const Advances = connector((props: Props) => {
	const uiState = props.char.uiState.advanceBarState;
	const index = props.charIndex;
	if (uiState == CharacterAdvancesPage.Root) {
		return (
			<AdvancesPageSelection
				changePage={props.changeAdvancesPage}
				index={props.charIndex}
			/>
		);
	} else {
		return (
			<div className="flexcol">
				<div
					className="flexrow subheader"
					onClick={() =>
						props.changeAdvancesPage(index, CharacterAdvancesPage.Root)
					}
				>
					←{" "}
					{uiState == CharacterAdvancesPage.FreeAdvances
						? "Free Advances"
						: uiState == CharacterAdvancesPage.RequiredAdvances
						? "Required Advances"
						: uiState == CharacterAdvancesPage.OptionalAdvances
						? "Optional Advances"
						: "Other Changes"}
				</div>
				{uiState == CharacterAdvancesPage.FreeAdvances ? (
					<FreeAdvancesPage
						char={props.char}
						charIndex={props.charIndex}
						applyShallyasMercy={props.applyShallyasMercy}
					/>
				) : null}
			</div>
		);
	}
});
