import * as React from "react";
import { Character, getStatChoices } from "../../store/state/character";
import { Stat, StatFullNames, PrimaryStatList } from "../../data/stats";

export const StatAdvance = (props: {
	char: Character;
	advanceStat: (stat: Stat, amount: number) => void;
}) => {
	const advances = getStatChoices(props.char)
		.filter((advance) => advance.amount > 0)
		.map((advance) => (
			<div
				key={advance.stat}
				className="button"
				onClick={() =>
					props.advanceStat(
						advance.stat,
						advance.stat in PrimaryStatList ? 5 : 1
					)
				}
			>
				{StatFullNames[advance.stat]} +{advance.stat in PrimaryStatList ? 5 : 1}{" "}
				of {advance.amount} available
			</div>
		));
	if (advances.length > 0) {
		return (
			<div className="flexcol event">
				<div className="title">Stat Advances</div>
				{advances}
			</div>
		);
	} else {
		return <></>;
	}
};
