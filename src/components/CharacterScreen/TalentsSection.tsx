import * as React from "react";
import { Character, getTalentList } from "../../store/state/character";

export const TalentsSection = (props: { char: Character }) => (
	<div className="flexcol block">
		<div className="header">TALENTS</div>
		<div className="cell">
			{getTalentList(props.char).map((talent) => (
				<div key={talent}>{talent}</div>
			))}
		</div>
	</div>
);
