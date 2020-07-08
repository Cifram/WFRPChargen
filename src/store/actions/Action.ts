import { AddCharacterAction } from "./addChracter";
import { ChangeAdvancesPageAction } from "./ChangeAdvancesPage";
import { ApplyShallyasMercyAction } from "./ApplyShallyasMercy";
import { SelectCharacterAction } from "./SelectCharacter";
import { GainSkillAction } from "./GainSkill";
import { RemoveShallyasMercyAction } from "./RemoveShallyasMercy";
import { RemoveEventAction } from "./RemoveEvent";
import { GainTalentAction } from "./GainTalent";
import { AdvanceStat } from "./AdvanceStat";

export type Action =
	| AddCharacterAction
	| ChangeAdvancesPageAction
	| ApplyShallyasMercyAction
	| RemoveShallyasMercyAction
	| SelectCharacterAction
	| GainSkillAction
	| GainTalentAction
	| AdvanceStat
	| RemoveEventAction;
