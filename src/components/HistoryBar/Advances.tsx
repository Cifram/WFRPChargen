import * as React from "react";
import { Character, CharacterAdvanceBarState } from "../../state/character";
import { State } from "../../state/state";
import { PrimaryStatNames } from "../../data/stats";
import { races } from "../../data/races";
import { ShallyasMercyAdvance } from "./ShallyasMercyAdvance";

export function Advances(props: { char: Character; state: State }) {
	const gotoSection = (section: CharacterAdvanceBarState) => {
		props.char.uiState.advanceBarState = section;
		props.state.dirty = true;
	};
	const uiState = props.char.uiState.advanceBarState;
	if (uiState == CharacterAdvanceBarState.Root) {
		return (
			<div className="flexCol">
				<div
					className="button"
					onClick={() => gotoSection(CharacterAdvanceBarState.FreeAdvances)}
				>
					Free Advances
				</div>
				<div
					className="button"
					onClick={() => gotoSection(CharacterAdvanceBarState.RequiredAdvances)}
				>
					Required Advances
				</div>
				<div
					className="button"
					onClick={() => gotoSection(CharacterAdvanceBarState.OptionalAdvances)}
				>
					Optional Advances
				</div>
				<div
					className="button"
					onClick={() => gotoSection(CharacterAdvanceBarState.OtherChanges)}
				>
					Other Changes
				</div>
			</div>
		);
	}

	let SectionContainer = (props: {
		title: string;
		children?: (JSX.Element | null)[];
	}) => (
		<div className="flexcol">
			<div
				className="flexrow subheader"
				onClick={() => gotoSection(CharacterAdvanceBarState.Root)}
			>
				← {props.title}
			</div>
			{props.children}
		</div>
	);

	if (uiState == CharacterAdvanceBarState.FreeAdvances) {
		let advances: JSX.Element[] = [
			<ShallyasMercyAdvance char={props.char} state={props.state} />,
		];
		return (
			<SectionContainer title="Free Advances">{advances}</SectionContainer>
		);
	} else if (uiState == CharacterAdvanceBarState.RequiredAdvances) {
		return <SectionContainer title="Required Advances"></SectionContainer>;
	} else if (uiState == CharacterAdvanceBarState.OptionalAdvances) {
		return <SectionContainer title="Optional Advances"></SectionContainer>;
	} else {
		return <SectionContainer title="Other Changes"></SectionContainer>;
	}
}
