import * as React from "react";
import { Character } from "../../store/state/character";
import { Event } from "./Event";
import { Advances } from "./Advances";
import { applyShallyasMercy } from "../../store/actions/ApplyShallyasMercy";
import { removeShallyasMercy } from "../../store/actions/RemoveShallyasMercy";
import { changeAdvancesPage } from "../../store/actions/ChangeAdvancesPage";
import { gainSkill } from "../../store/actions/GainSkill";
import { removeEvent } from "../../store/actions/RemoveEvent";
import { ConnectedProps, connect } from "react-redux";
import { State } from "../../store/state/state";
import { ShallyasMercyEvent } from "./ShallyasMercyEvent";

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
	removeShallyasMercy,
	changeAdvancesPage,
	gainSkill,
	removeEvent,
};

const connector = connect(mapState, mapDispatch);
interface Props extends ConnectedProps<typeof connector> {
	char: Character;
}

export const History = connector((props: Props) => {
	let eventIndex = -1;
	let history = props.char.history.map((event) => {
		eventIndex++;
		return (
			<Event
				key={eventIndex}
				event={event}
				remove={() => props.removeEvent(props.charIndex, eventIndex)}
			/>
		);
	});

	return (
		<div className="flexcol history">
			<div className="header">HISTORY</div>
			<div className="historySection scrollPage">
				{props.char.shallyasMercy == null ? (
					""
				) : (
					<ShallyasMercyEvent
						char={props.char}
						charIndex={props.charIndex}
						stat={props.char.shallyasMercy}
						removeShallyasMercy={props.removeShallyasMercy}
					/>
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
					gainSkill={(charIndex, skill) =>
						props.gainSkill(charIndex, skill, false)
					}
				/>
			</div>
		</div>
	);
});
