import * as React from "react";
import { ShallyasMercyAdvance } from "./ShallyasMercyAdvance";
import { Character, getFreeSkillChoices } from "../../store/state/character";
import { PrimaryStat } from "../../data/stats";
import { ApplyShallyasMercyAction } from "../../store/actions/ApplyShallyasMercy";
import { SkillChoiceAdvance } from "./SkillChoiceAdvance";
import { SkillName } from "../../data/skills";
import { GainSkillAction } from "../../store/actions/GainSkill";

export const FreeAdvancesPage = (props: {
	char: Character;
	charIndex: number;
	applyShallyasMercy: (
		charIndex: number,
		stat: PrimaryStat
	) => ApplyShallyasMercyAction;
	gainSkill: (charIndex: number, skill: SkillName) => GainSkillAction;
}) => {
	var choices = getFreeSkillChoices(props.char).map((choice) => (
		<SkillChoiceAdvance
			choice={choice}
			charIndex={props.charIndex}
			key={choice.skills[0]}
			gainSkill={props.gainSkill}
		/>
	));
	return (
		<>
			<ShallyasMercyAdvance
				char={props.char}
				charIndex={props.charIndex}
				applyShallyasMercy={(stat) =>
					props.applyShallyasMercy(props.charIndex, stat)
				}
			/>
			{choices}
		</>
	);
};
