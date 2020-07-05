import * as React from "react";
import {
	Character,
	getSkillList,
	calcStatBlock,
} from "../../store/state/character";
import { skills } from "../../data/skills";

export function SkillsSection(props: { char: Character }) {
	const ownedSkills = getSkillList(props.char);
	const stats = calcStatBlock(props.char);
	const skillList: JSX.Element[] = [];
	for (const ownedSkill of ownedSkills) {
		const skill = skills[ownedSkill.skill];
		let stat = skill.characteristic;
		let statValue = stats[stat];
		let totalBonus = ownedSkill.bonuses.reduce(
			(total, bonus) => total + bonus.bonus,
			0
		);

		let bonusStr = ownedSkill.bonuses
			.map(
				(bonus) =>
					`\n  ${bonus.bonus >= 0 ? "+" : ""}${bonus.bonus} - ${bonus.desc}`
			)
			.join();

		let sitBonusStr = ownedSkill.sitBonuses
			.map(
				(bonus) =>
					`\n  ${bonus.bonus >= 0 ? "+" : ""}${bonus.bonus} - ${bonus.desc}`
			)
			.join();

		let tooltip = `${skill.name}\n  +${statValue} - ${stat}${bonusStr}\n${
			statValue + totalBonus
		} total\n\nSituational bonuses:${sitBonusStr}`;

		skillList.push(
			<div className="flexrow" title={tooltip} key={skill.name}>
				<div>{skill.name}</div>
				<div className="stat">
					{stat}
					{totalBonus != 0 ? `${totalBonus > 0 ? "+" : ""}${totalBonus}` : ""} (
					{statValue + totalBonus})
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
