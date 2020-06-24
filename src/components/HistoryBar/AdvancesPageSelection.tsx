import * as React from "react";
import { CharacterAdvancesPage } from "../../store/state/character";
import { ChangeAdvancesPageAction } from "../../store/actions/ChangeAdvancesPage";

export const AdvancesPageSelection = (props: {
	changePage: (
		charIndex: number,
		section: CharacterAdvancesPage
	) => ChangeAdvancesPageAction;
	index: number;
}) => (
	<div className="flexCol">
		<div
			className="button"
			onClick={() =>
				props.changePage(props.index, CharacterAdvancesPage.FreeAdvances)
			}
		>
			Free Advances
		</div>
		<div
			className="button"
			onClick={() =>
				props.changePage(props.index, CharacterAdvancesPage.RequiredAdvances)
			}
		>
			Required Advances
		</div>
		<div
			className="button"
			onClick={() =>
				props.changePage(props.index, CharacterAdvancesPage.OptionalAdvances)
			}
		>
			Optional Advances
		</div>
		<div
			className="button"
			onClick={() =>
				props.changePage(props.index, CharacterAdvancesPage.OtherChanges)
			}
		>
			Other Changes
		</div>
	</div>
);
