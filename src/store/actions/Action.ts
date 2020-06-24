import { AddCharacterAction } from "./addChracter";
import { ChangeAdvancesPageAction } from "./ChangeAdvancesPage";
import { ApplyShallyasMercyAction } from "./ApplyShallyasMercy";
import { SelectCharacterAction } from "./SelectCharacter";
import { GainSkillAction } from "./GainSkill";

export type Action =
	| AddCharacterAction
	| ChangeAdvancesPageAction
	| ApplyShallyasMercyAction
	| SelectCharacterAction
	| GainSkillAction;
