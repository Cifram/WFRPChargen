import * as React from "react";
import { Character } from "../../store/state/character";
import { SkillName } from "../../data/skills";
import { TalentName } from "../../data/talents";
import { Stat } from "../../data/stats";
import { GainSkillAction } from "../../store/actions/GainSkill";
import { GainTalentAction } from "../../store/actions/GainTalent";
import { AdvanceStat } from "../../store/actions/AdvanceStat";
import { StatAdvance } from "./StatAdvance";

export const RequiredAdvancesPage = (props: {
	char: Character;
	gainSkill: (skill: SkillName) => GainSkillAction;
	gainTalent: (talent: TalentName) => GainTalentAction;
	advanceStat: (stat: Stat, amount: number) => AdvanceStat;
}) => <StatAdvance char={props.char} advanceStat={props.advanceStat} />;
