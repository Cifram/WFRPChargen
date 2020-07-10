import * as React from "react";
import {
	CharacterAdvancesPage,
	Character,
	getFreeSkillChoices,
	getFreeTalentChoices,
} from "../../store/state/character";
import { ChangeAdvancesPageAction } from "../../store/actions/ChangeAdvancesPage";

export const AdvancesPageSelection = (props: {
	char: Character;
	changePage: (section: CharacterAdvancesPage) => ChangeAdvancesPageAction;
}) => {
	const freeCount =
		(props.char.shallyasMercy == null ? 1 : 0) +
		(props.char.history.find((event) => event.type == "StatAdvance") ==
		undefined
			? 1
			: 0) +
		getFreeSkillChoices(props.char).reduce(
			(count, skill) => count + (typeof skill == "string" ? 1 : skill.count),
			0
		) +
		getFreeTalentChoices(props.char).reduce(
			(count, talent) => count + (typeof talent == "string" ? 1 : talent.count),
			0
		);
	return (
		<div className="flexCol">
			<div
				className="button"
				onClick={() => props.changePage(CharacterAdvancesPage.FreeAdvances)}
			>
				Free Advances
				{freeCount > 0 ? (
					<div className="advanceCount callToAction">{freeCount}</div>
				) : (
					<></>
				)}
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
};
