import * as React from "react";
import { Character } from "../../store/state/character";
import { PrimaryStat } from "../../data/stats";
import { races } from "../../data/races";
import { EventHeader } from "./EventHeader";

export const ShallyasMercyEvent = (props: {
	char: Character;
	charIndex: number;
	stat: PrimaryStat;
	removeShallyasMercy: (charIndex: number) => void;
}) => (
	<div className="flexcol event">
		<EventHeader
			title="Shallya's Mercy"
			remove={() => props.removeShallyasMercy(props.charIndex)}
		/>
		<div className="content">
			{props.stat}{" "}
			{props.char.statRolls[props.stat] +
				races[props.char.race].baseStats[props.stat]}
			→{11 + races[props.char.race].baseStats[props.stat]}
		</div>
	</div>
);
