import * as React from "react";
import { ShallyasMercyAdvance } from "./ShallyasMercyAdvance";
import {
	Character,
	getFreeSkillChoices,
	getFreeTalentChoices,
} from "../../store/state/character";
import { PrimaryStat, Stat } from "../../data/stats";
import { ApplyShallyasMercyAction } from "../../store/actions/ApplyShallyasMercy";
import { SkillChoiceAdvance } from "./SkillChoiceAdvance";
import { SkillName } from "../../data/skills";
import { GainSkillAction } from "../../store/actions/GainSkill";
import { TalentChoiceAdvance } from "./TalentChoiceAdvance";
import { GainTalentAction } from "../../store/actions/GainTalent";
import { TalentName } from "../../data/talents";
import { StatAdvance } from "./StatAdvance";
import { AdvanceStat } from "../../store/actions/AdvanceStat";

export const FreeAdvancesPage = (props: {
	char: Character;
	applyShallyasMercy: (stat: PrimaryStat) => ApplyShallyasMercyAction;
	gainSkill: (skill: SkillName) => GainSkillAction;
	gainTalent: (talent: TalentName) => GainTalentAction;
	advanceStat: (stat: Stat, amount: number) => AdvanceStat;
}) => {
	const choices = [
		...getFreeSkillChoices(props.char).map((choice) => (
			<SkillChoiceAdvance
				choice={choice}
				key={choice.skills[0]}
				gainSkill={props.gainSkill}
			/>
		)),
		...getFreeTalentChoices(props.char).map((choice) => (
			<TalentChoiceAdvance
				choice={choice}
				key={choice.talents[0]}
				gainTalent={props.gainTalent}
			/>
		)),
	];
	return (
		<>
			<ShallyasMercyAdvance
				char={props.char}
				applyShallyasMercy={props.applyShallyasMercy}
			/>
			{props.char.history.find((event) => event.type == "StatAdvance") ==
			undefined ? (
				<StatAdvance char={props.char} advanceStat={props.advanceStat} />
			) : (
				<></>
			)}
			{choices}
		</>
	);
};
