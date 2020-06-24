import * as React from "react";
import { ShallyasMercyAdvance } from "./ShallyasMercyAdvance";
import { Character, getFreeSkillChoices } from "../../store/state/character";
import { PrimaryStat } from "../../data/stats";
import { ApplyShallyasMercyAction } from "../../store/actions/ApplyShallyasMercy";
import { SkillChoiceAdvance } from "./SkillChoiceAdvance";

export const FreeAdvancesPage = (props: {
	char: Character;
	charIndex: number;
	applyShallyasMercy: (
		charIndex: number,
		stat: PrimaryStat
	) => ApplyShallyasMercyAction;
}) => {
	var choices = getFreeSkillChoices(props.char).map((choice) => (
		<SkillChoiceAdvance choice={choice} key={choice.skills[0]} />
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
