import * as React from "react";
import { CharacterAdvancesPage } from "../../store/state/character";
import { ChangeAdvancesPageAction } from "../../store/actions/ChangeAdvancesPage";

export const AdvancesPageSelection = (props: {
	changePage: (section: CharacterAdvancesPage) => ChangeAdvancesPageAction;
}) => (
	<div className="flexCol">
		<div
			className="button"
			onClick={() => props.changePage(CharacterAdvancesPage.FreeAdvances)}
		>
			Free Advances
		</div>
		<div
			className="button"
			onClick={() => props.changePage(CharacterAdvancesPage.RequiredAdvances)}
		>
			Required Advances
		</div>
		<div
			className="button"
			onClick={() => props.changePage(CharacterAdvancesPage.OptionalAdvances)}
		>
			Optional Advances
		</div>
		<div
			className="button"
			onClick={() => props.changePage(CharacterAdvancesPage.OtherChanges)}
		>
			Other Changes
		</div>
	</div>
);
