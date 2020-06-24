import * as React from "react";
import { Character } from "../../store/state/character";
import { races } from "../../data/races";
import { Event } from "./Event";
import { Advances } from "./Advances";
import { applyShallyasMercy } from "../../store/actions/ApplyShallyasMercy";
import { changeAdvancesPage } from "../../store/actions/ChangeAdvancesPage";
import { ConnectedProps, connect } from "react-redux";
import { State } from "../../store/state/state";

const mapState = (state: State) => {
	if (state.selectedCharacter == null) {
		throw "Somehow showing the history sidebar without a character selected";
	}
	return {
		charIndex: state.selectedCharacter,
	};
};

const mapDispatch = {
	applyShallyasMercy,
	changeAdvancesPage,
};

const connector = connect(mapState, mapDispatch);
interface Props extends ConnectedProps<typeof connector> {
	char: Character;
}

export const History = connector((props: Props) => {
	let eventIndex = 0;
	let history = props.char.history.map((event) => {
		eventIndex++;
		return <Event key={eventIndex} event={event} />;
	});

	return (
		<div className="flexcol history">
			<div className="header">HISTORY</div>
			<div className="historySection scrollPage">
				{props.char.shallyasMercy == null ? (
					""
				) : (
					<div className="flexcol event">
						<div className="title">Shallya's Mercy</div>
						<div className="content">
							{props.char.shallyasMercy}{" "}
							{props.char.statRolls[props.char.shallyasMercy] +
								races[props.char.race].baseStats[props.char.shallyasMercy]}
							→{11 + races[props.char.race].baseStats[props.char.shallyasMercy]}
						</div>
					</div>
				)}
				{history}
			</div>
			<div className="header">ADVANCES</div>
			<div className="advancesSection flexcol">
				<Advances
					char={props.char}
					charIndex={props.charIndex}
					applyShallyasMercy={props.applyShallyasMercy}
					changeAdvancesPage={props.changeAdvancesPage}
				/>
			</div>
		</div>
	);
});
