import { AddCharacterAction } from "./addChracter";
import { ChangeAdvancesPageAction } from "./ChangeAdvancesPage";
import { ApplyShallyasMercyAction } from "./ApplyShallyasMercy";
import { SelectCharacterAction } from "./SelectCharacter";
import { GainSkillAction } from "./GainSkill";
import { RemoveShallyasMercyAction } from "./RemoveShallyasMercy";
import { RemoveEventAction } from "./RemoveEvent";

export type Action =
	| AddCharacterAction
	| ChangeAdvancesPageAction
	| ApplyShallyasMercyAction
	| RemoveShallyasMercyAction
	| SelectCharacterAction
	| GainSkillAction
	| RemoveEventAction;
