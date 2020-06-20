import { AddCharacterAction } from "./addChracter";
import { ChangeAdvancesSectionAction } from "./ChangeAdvancesSection";
import { ApplyShallyasMercyAction } from "./ApplyShallyasMercy";
import { ChangeSelectedCharacterAction } from "./ChangeSelectedCharacter";

export type Action =
	| AddCharacterAction
	| ChangeAdvancesSectionAction
	| ApplyShallyasMercyAction
	| ChangeSelectedCharacterAction;
