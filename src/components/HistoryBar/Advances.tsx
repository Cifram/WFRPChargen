import * as React from "react";
import { CharacterAdvanceBarState } from "../../store/state/character";
import { ShallyasMercyAdvance } from "./ShallyasMercyAdvance";
import { applyShallyasMercy } from "../../store/actions/ApplyShallyasMercy";
import { changeAdvancesPage } from "../../store/actions/ChangeAdvancesPage";
import { ConnectedProps, connect } from "react-redux";
import { State } from "../../store/state/state";
import { AdvancesPageSelection } from "./AdvancesPageSelection";

const mapState = (state: State) => {
	if (state.selectedCharacter == null) {
		throw "Somehow rendering Advances component with no character selected";
	}
	return {
		charIndex: state.selectedCharacter,
		char: state.characters[state.selectedCharacter],
	};
};

const mapDispatch = {
	changeAdvancesSection: changeAdvancesPage,
	applyShallyasMercy,
};

const connector = connect(mapState, mapDispatch);
interface Props extends ConnectedProps<typeof connector> {}

export const Advances = connector((props: Props) => {
	const uiState = props.char.uiState.advanceBarState;
	const changeSection = props.changeAdvancesSection;
	const index = props.charIndex;
	if (uiState == CharacterAdvanceBarState.Root) {
		return (
			<AdvancesPageSelection
				changePage={props.changeAdvancesSection}
				index={props.charIndex}
			/>
		);
	}

	let SectionContainer = (props: {
		title: string;
		children?: (JSX.Element | null)[];
	}) => (
		<div className="flexcol">
			<div
				className="flexrow subheader"
				onClick={() => changeSection(index, CharacterAdvanceBarState.Root)}
			>
				← {props.title}
			</div>
			{props.children}
		</div>
	);

	if (uiState == CharacterAdvanceBarState.FreeAdvances) {
		let advances: JSX.Element[] = [
			<ShallyasMercyAdvance
				char={props.char}
				charIndex={props.charIndex}
				applyShallyasMercy={(stat) =>
					props.applyShallyasMercy(props.charIndex, stat)
				}
			/>,
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
});
