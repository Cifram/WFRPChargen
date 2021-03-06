import * as React from "react";
import { generate } from "../generate";
import { RaceName } from "../data/races";
import { addCharacter } from "../store/actions/AddChracter";
import { selectCharacter } from "../store/actions/SelectCharacter";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../store/state/state";

const mapState = (state: State) => ({
	charCount: state.characters.length,
});

const mapDispatch = {
	addCharacter,
	selectCharacter,
};

const connector = connect(mapState, mapDispatch);

interface Props extends ConnectedProps<typeof connector> {}

export const GenerateScreen = connector((props: Props) => {
	const makeOnClick = (race: RaceName, gender: "Male" | "Female") => () => {
		props.addCharacter(generate(race, gender));
		props.selectCharacter(props.charCount);
	};
	return (
		<div className="flexrow generateScreen">
			<div className="flexcol group">
				<div>Human</div>
				<div className="button" onClick={makeOnClick("Human", "Male")}>
					Male
				</div>
				<div className="button" onClick={makeOnClick("Human", "Female")}>
					Female
				</div>
			</div>
			<div className="flexcol group">
				<div>Elf</div>
				<div className="button" onClick={makeOnClick("Elf", "Male")}>
					Male
				</div>
				<div className="button" onClick={makeOnClick("Elf", "Female")}>
					Female
				</div>
			</div>
			<div className="flexcol group">
				<div>Dwarf</div>
				<div className="button" onClick={makeOnClick("Dwarf", "Male")}>
					Male
				</div>
				<div className="button" onClick={makeOnClick("Dwarf", "Female")}>
					Female
				</div>
			</div>
			<div className="flexcol group">
				<div>Halfling</div>
				<div className="button" onClick={makeOnClick("Halfling", "Male")}>
					Male
				</div>
				<div className="button" onClick={makeOnClick("Halfling", "Female")}>
					Female
				</div>
			</div>
		</div>
	);
});
