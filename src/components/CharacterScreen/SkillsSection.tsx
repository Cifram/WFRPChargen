import * as React from "react";
import {
	Character,
	getSkillList,
	calcStatBlock,
	bonusDescStr,
} from "../../store/state/character";
import { skills } from "../../data/skills";
import { StatFullNames } from "../../data/stats";

export function SkillsSection(props: { char: Character }) {
	const ownedSkills = getSkillList(props.char);
	const stats = calcStatBlock(props.char);
	const skillList: JSX.Element[] = [];
	for (const ownedSkill of ownedSkills) {
		const skill = skills[ownedSkill.skill];
		let stat = skill.characteristic;
		let statData = stats[stat];
		let totalBonus = ownedSkill.bonuses.reduce(
			(total, bonus) => total + bonus.bonus,
			0
		);

		let tooltip =
			`${skill.name}\n` +
			bonusDescStr([
				{ bonus: statData.total, desc: StatFullNames[stat] },
				...ownedSkill.bonuses,
			]) +
			`${statData.total + totalBonus} total` +
			(ownedSkill.sitBonuses.length > 0
				? `\n\nSituational bonuses:\n` + bonusDescStr(ownedSkill.sitBonuses)
				: "");
		skillList.push(
			<div className="flexrow" title={tooltip} key={skill.name}>
				<div>{skill.name}</div>
				<div className="stat">
					{stat}
					{totalBonus != 0 ? `${totalBonus > 0 ? "+" : ""}${totalBonus}` : ""} (
					{statData.total + totalBonus})
				</div>
			</div>
		);
	}

	return (
		<div className="flexcol block">
			<div className="header">SKILLS</div>
			<div className="cell">{skillList}</div>
		</div>
	);
}
