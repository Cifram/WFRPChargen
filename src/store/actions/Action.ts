import { AddCharacterAction } from "./addChracter";
import { ChangeAdvancesSectionAction } from "./ChangeAdvancesSection";
import { ApplyShallyasMercyAction } from "./ApplyShallyasMercy";
import { SelectCharacterAction } from "./SelectCharacter";

export type Action =
	| AddCharacterAction
	| ChangeAdvancesSectionAction
	| ApplyShallyasMercyAction
	| SelectCharacterAction;
