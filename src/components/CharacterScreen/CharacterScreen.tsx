import * as React from "react";
import { CharacterSection } from "./CharacterSection";
import { StatsSection } from "./StatsSection";
import { PersonalSection } from "./PersonalSection";
import { SkillsSection } from "./SkillsSection";
import { History } from "../HistoryBar/History";
import { Character } from "../../store/state/character";

export function CharacterScreen(props: { char: Character }) {
	return (
		<div className="flexrow characterScreen">
			<div className="flexcol character">
				<CharacterSection char={props.char} />
				<StatsSection char={props.char} />
				<PersonalSection char={props.char} />
				<SkillsSection char={props.char} />
			</div>
			<History char={props.char} />
		</div>
	);
}
