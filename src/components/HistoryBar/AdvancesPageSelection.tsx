import * as React from "react";
import { CharacterAdvanceBarState } from "../../store/state/character";
import { ChangeAdvancesPageAction } from "../../store/actions/ChangeAdvancesPage";

export const AdvancesPageSelection = (props: {
	changePage: (
		charIndex: number,
		section: CharacterAdvanceBarState
	) => ChangeAdvancesPageAction;
	index: number;
}) => (
	<div className="flexCol">
		<div
			className="button"
			onClick={() =>
				props.changePage(props.index, CharacterAdvanceBarState.FreeAdvances)
			}
		>
			Free Advances
		</div>
		<div
			className="button"
			onClick={() =>
				props.changePage(props.index, CharacterAdvanceBarState.RequiredAdvances)
			}
		>
			Required Advances
		</div>
		<div
			className="button"
			onClick={() =>
				props.changePage(props.index, CharacterAdvanceBarState.OptionalAdvances)
			}
		>
			Optional Advances
		</div>
		<div
			className="button"
			onClick={() =>
				props.changePage(props.index, CharacterAdvanceBarState.OtherChanges)
			}
		>
			Other Changes
		</div>
	</div>
);
