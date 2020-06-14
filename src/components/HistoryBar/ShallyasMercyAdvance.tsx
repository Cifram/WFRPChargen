import * as React from "react";
import { Character } from "../../state/character";
import { State } from "../../state/state";
import { PrimaryStatNames } from "../../data/stats";
import { races } from "../../data/races";

export function ShallyasMercyAdvance(props: { char: Character; state: State }) {
	if (props.char.shallyasMercy == null) {
		let shallyasMercyStats = PrimaryStatNames.filter(
			(stat) => props.char.statRolls[stat] < 11
		).reduce((result: JSX.Element[], stat) => {
			result.push(
				<div
					className="flexrow button"
					onClick={() => {
						props.char.shallyasMercy = stat;
						props.state.dirty = true;
					}}
				>
					<div className="stat">{stat}</div>
					<div className="old">
						{props.char.statRolls[stat] +
							races[props.char.race].baseStats[stat]}
					</div>
					<div className="arrow">→</div>
					<div className="new">
						{11 + races[props.char.race].baseStats[stat]}
					</div>
				</div>
			);
			return result;
		}, []);
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
}
