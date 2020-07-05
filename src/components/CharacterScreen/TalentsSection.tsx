import * as React from "react";
import { Character, getTalentList } from "../../store/state/character";
import { talents } from "../../data/talents";

export const TalentsSection = (props: { char: Character }) => (
	<div className="flexcol block">
		<div className="header">TALENTS</div>
		<div className="cell">
			{getTalentList(props.char).map((talent) => (
				<div title={talents[talent].description} key={talent}>
					{talents[talent].name}
				</div>
			))}
		</div>
	</div>
);
