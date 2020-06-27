import * as React from "react";
import { Character } from "../../store/state/character";
import { PrimaryStatNames, PrimaryStat } from "../../data/stats";
import { races } from "../../data/races";

export const ShallyasMercyAdvance = (props: {
	char: Character;
	charIndex: number;
	applyShallyasMercy: (stat: PrimaryStat) => void;
}) => {
	if (props.char.shallyasMercy == null) {
		let shallyasMercyStats = PrimaryStatNames.filter(
			(stat) => props.char.statRolls[stat] < 11
		).map((stat) => (
			<div
				key={stat}
				className="flexrow button"
				onClick={() => props.applyShallyasMercy(stat)}
			>
				<div className="stat">{stat}</div>
				<div className="old">
					{props.char.statRolls[stat] + races[props.char.race].baseStats[stat]}
				</div>
				<div className="arrow">→</div>
				<div className="new">{11 + races[props.char.race].baseStats[stat]}</div>
			</div>
		));
		if (shallyasMercyStats.length > 0) {
			return (
				<div className="flexcol event">
					<div className="title">Shallya's Mercy</div>
					<div className="shallyasMercy">{shallyasMercyStats}</div>
				</div>
			);
		}
	}
	return <></>;
};
