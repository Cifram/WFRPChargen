import * as React from "react";
import { CharacterSection } from "./CharacterSection";
import { StatsSection } from "./StatsSection";
import { PersonalSection } from "./PersonalSection";
import { SkillsSection } from "./SkillsSection";
import { History } from "../HistoryBar/History";
import { Character } from "../../store/state/character";
import { TalentsSection } from "./TalentsSection";

export function CharacterScreen(props: { char: Character }) {
	return (
		<div className="flexrow characterScreen">
			<div className="flexcol character">
				<CharacterSection char={props.char} />
				<StatsSection char={props.char} />
				<PersonalSection char={props.char} />
				<div className="flexrow">
					<SkillsSection char={props.char} />
					<TalentsSection char={props.char} />
				</div>
			</div>
			<History char={props.char} />
		</div>
	);
}
