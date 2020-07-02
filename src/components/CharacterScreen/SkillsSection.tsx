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
		if (ownedSkill.mastery == 1) {
			stat += " +10";
			statValue += 10;
		} else if (ownedSkill.mastery == 2) {
			stat += " +20";
			statValue += 20;
		}
		skillList.push(
			<div className="flexrow" key={skill.name}>
				<div>{skill.name}</div>
				<div className="stat">
					{stat} ({statValue})
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
