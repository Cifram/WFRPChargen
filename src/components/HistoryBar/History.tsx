import * as React from "react";
import { Character } from "../../store/state/character";
import { Event } from "./Event";
import { Advances } from "./Advances";
import { applyShallyasMercy } from "../../store/actions/ApplyShallyasMercy";
import { removeShallyasMercy } from "../../store/actions/RemoveShallyasMercy";
import { changeAdvancesPage } from "../../store/actions/ChangeAdvancesPage";
import { gainSkill } from "../../store/actions/GainSkill";
import { gainTalent } from "../../store/actions/GainTalent";
import { removeEvent } from "../../store/actions/RemoveEvent";
import { advanceStat } from "../../store/actions/AdvanceStat";
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
	gainTalent,
	removeEvent,
	advanceStat,
};

const connector = connect(mapState, mapDispatch);
interface Props extends ConnectedProps<typeof connector> {
	char: Character;
}

export const History = connector((props: Props) => {
	let eventIndex = -1;
	const history = props.char.history.map((event) => {
		eventIndex++;
		const savedEventIndex = eventIndex;
		return (
			<Event
				key={eventIndex}
				event={event}
				remove={() => props.removeEvent(props.charIndex, savedEventIndex)}
			/>
		);
	});

	return (
		<div className="flexcol history">
			<div className="header">HISTORY</div>
			<div className="historySection scrollPage">
				{props.char.shallyasMercy == null ? (
					<></>
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
					applyShallyasMercy={(stat) =>
						props.applyShallyasMercy(props.charIndex, stat)
					}
					changeAdvancesPage={(section) =>
						props.changeAdvancesPage(props.charIndex, section)
					}
					gainSkill={(skill) => props.gainSkill(props.charIndex, skill, false)}
					gainTalent={(talent) =>
						props.gainTalent(props.charIndex, talent, false)
					}
					advanceStat={(stat, amount) =>
						props.advanceStat(props.charIndex, stat, amount)
					}
				/>
			</div>
		</div>
	);
});
