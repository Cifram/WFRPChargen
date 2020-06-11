import * as React from "react";
import { State } from "../../state/state";
import { CharacterSection } from "./CharacterSection";
import { StatsSection } from "./StatsSection";
import { PersonalSection } from "./PersonalSection";
import { SkillsSection } from "./SkillsSection";
import { History } from "./History";

export function Screen(props: { state: State }) {
	if (props.state.selectedCharacter == null) {
		return <h1>Error: No character selected</h1>;
	}

	let character = props.state.characters[props.state.selectedCharacter];
	return (
		<div className="flexrow characterScreen">
			<div className="flexcol character">
				<CharacterSection char={character} />
				<StatsSection char={character} />
				<PersonalSection char={character} />
				<SkillsSection char={character} />
			</div>
			<History char={character} />
		</div>
	);
}
