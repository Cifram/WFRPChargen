import * as React from "react";
import { CharacterAdvancesPage, Character } from "../../store/state/character";
import { ApplyShallyasMercyAction } from "../../store/actions/ApplyShallyasMercy";
import { ChangeAdvancesPageAction } from "../../store/actions/ChangeAdvancesPage";
import { AdvancesPageSelection } from "./AdvancesPageSelection";
import { FreeAdvancesPage } from "./FreeAdvancesPage";
import { PrimaryStat } from "../../data/stats";

export const Advances = (props: {
	char: Character;
	charIndex: number;
	applyShallyasMercy: (
		charIndex: number,
		stat: PrimaryStat
	) => ApplyShallyasMercyAction;
	changeAdvancesPage: (
		charIndex: number,
		section: CharacterAdvancesPage
	) => ChangeAdvancesPageAction;
}) => {
	const uiState = props.char.uiState.advanceBarState;
	if (uiState == CharacterAdvancesPage.Root) {
		return (
			<AdvancesPageSelection
				changePage={props.changeAdvancesPage}
				index={props.charIndex}
			/>
		);
	} else {
		var page = props.char.uiState.advanceBarState;
		return (
			<>
				<div
					className="flexrow subheader"
					onClick={() =>
						props.changeAdvancesPage(
							props.charIndex,
							CharacterAdvancesPage.Root
						)
					}
				>
					←{" "}
					{page == CharacterAdvancesPage.FreeAdvances
						? "Free Advances"
						: page == CharacterAdvancesPage.RequiredAdvances
						? "Required Advances"
						: page == CharacterAdvancesPage.OptionalAdvances
						? "Optional Advances"
						: "Other Changes"}
				</div>
				<div className="flexcol scrollPage">
					{uiState == CharacterAdvancesPage.FreeAdvances ? (
						<FreeAdvancesPage
							char={props.char}
							charIndex={props.charIndex}
							applyShallyasMercy={props.applyShallyasMercy}
						/>
					) : null}
				</div>
			</>
		);
	}
};
