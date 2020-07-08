import * as React from "react";
import { TalentChoice } from "../../data/careers";
import { TalentName, talents } from "../../data/talents";
import { GainTalentAction } from "../../store/actions/GainTalent";

export const TalentChoiceAdvance = (props: {
	choice: TalentChoice;
	gainTalent: (talent: TalentName) => GainTalentAction;
}) => (
	<div className="flexcol event">
		<div className="title">
			Choose {props.choice.count} Talent{props.choice.count > 1 ? "s" : ""}
		</div>
		{props.choice.talents.map((talent) => (
			<div
				className="button"
				onClick={() => props.gainTalent(talent)}
				title={talents[talent].description}
				key={talent}
			>
				{talents[talent].name}
			</div>
		))}
	</div>
);
