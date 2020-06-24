import * as React from "react";
import { ShallyasMercyAdvance } from "./ShallyasMercyAdvance";
import { Character } from "../../store/state/character";
import { PrimaryStat } from "../../data/stats";
import { ApplyShallyasMercyAction } from "../../store/actions/ApplyShallyasMercy";

export const FreeAdvancesPage = (props: {
	char: Character;
	charIndex: number;
	applyShallyasMercy: (
		charIndex: number,
		stat: PrimaryStat
	) => ApplyShallyasMercyAction;
}) => (
	<>
		<ShallyasMercyAdvance
			char={props.char}
			charIndex={props.charIndex}
			applyShallyasMercy={(stat) =>
				props.applyShallyasMercy(props.charIndex, stat)
			}
		/>
	</>
);
