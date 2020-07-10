import * as React from "react";
import { CharacterAdvancesPage, Character } from "../../store/state/character";
import { ApplyShallyasMercyAction } from "../../store/actions/ApplyShallyasMercy";
import { ChangeAdvancesPageAction } from "../../store/actions/ChangeAdvancesPage";
import { AdvancesPageSelection } from "./AdvancesPageSelection";
import { FreeAdvancesPage } from "./FreeAdvancesPage";
import { PrimaryStat, Stat } from "../../data/stats";
import { SkillName } from "../../data/skills";
import { GainSkillAction } from "../../store/actions/GainSkill";
import { TalentName } from "../../data/talents";
import { GainTalentAction } from "../../store/actions/GainTalent";
import { AdvanceStat } from "../../store/actions/AdvanceStat";
import { RequiredAdvancesPage } from "./RequiredAdvancesPage";

export const Advances = (props: {
	char: Character;
	applyShallyasMercy: (stat: PrimaryStat) => ApplyShallyasMercyAction;
	changeAdvancesPage: (
		section: CharacterAdvancesPage
	) => ChangeAdvancesPageAction;
	gainSkill: (skill: SkillName) => GainSkillAction;
	gainTalent: (talent: TalentName) => GainTalentAction;
	advanceStat: (stat: Stat, amount: number) => AdvanceStat;
}) => {
	const uiState = props.char.uiState.advanceBarState;
	if (uiState == CharacterAdvancesPage.Root) {
		return (
			<AdvancesPageSelection
				char={props.char}
				changePage={props.changeAdvancesPage}
			/>
		);
	} else {
		const page = props.char.uiState.advanceBarState;
		return (
			<>
				<div
					className="flexrow subheader"
					onClick={() => props.changeAdvancesPage(CharacterAdvancesPage.Root)}
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
							applyShallyasMercy={props.applyShallyasMercy}
							gainSkill={props.gainSkill}
							gainTalent={props.gainTalent}
							advanceStat={props.advanceStat}
						/>
					) : uiState == CharacterAdvancesPage.RequiredAdvances ? (
						<RequiredAdvancesPage
							char={props.char}
							gainSkill={props.gainSkill}
							gainTalent={props.gainTalent}
							advanceStat={props.advanceStat}
						/>
					) : (
						<></>
					)}
				</div>
			</>
		);
	}
};
