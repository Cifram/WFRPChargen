import * as React from "react";
import { State } from "../state/state";
import { generate } from "../generate";
import { RaceName } from "../data/races";

export function GenerateScreen(props: { state: State }) {
	let makeOnClick = (race: RaceName, gender: "Male" | "Female") => () => {
		props.state.characters.push(generate(race, gender));
		props.state.dirty = true;
	}
	return <div className="flexrow generateScreen">
		<div className="flexcol group">
			<div>Human</div>
			<div className="button" onClick={makeOnClick("Human", "Male")}>Male</div>
			<div className="button" onClick={makeOnClick("Human", "Female")}>Female</div>
		</div>
		<div className="flexcol group">
			<div>Elf</div>
			<div className="button" onClick={makeOnClick("Elf", "Male")}>Male</div>
			<div className="button" onClick={makeOnClick("Elf", "Female")}>Female</div>
		</div>
		<div className="flexcol group">
			<div>Dwarf</div>
			<div className="button" onClick={makeOnClick("Dwarf", "Male")}>Male</div>
			<div className="button" onClick={makeOnClick("Dwarf", "Female")}>Female</div>
		</div>
		<div className="flexcol group">
			<div>Halfling</div>
			<div className="button" onClick={makeOnClick("Halfling", "Male")}>Male</div>
			<div className="button" onClick={makeOnClick("Halfling", "Female")}>Female</div>
		</div>
	</div>
};