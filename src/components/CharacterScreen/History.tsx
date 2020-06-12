import * as React from "react";
import { Character, getAvailableSkills } from "../../state/character";
import { skills, SkillName } from "../../data/skills";
import { StatBlock, PrimaryStatNames, PrimaryStat } from "../../data/stats";
import { races } from "../../data/races";

export function History(props: { char: Character }) {
	let eventIndex = 0;
	let history = props.char.history.map((event) => {
		eventIndex++;
		if (event.type == "SkillAdvance") {
			return (
				<div key={eventIndex} className="flexcol event">
					<div className="title">Learned Skill</div>
					<div className="content">{skills[event.skill].name}</div>
				</div>
			);
		} else if (event.type == "StatAdvance") {
			return (
				<div key={eventIndex} className="flexcol event">
					<div className="title">Improved Characteristic</div>
					<div className="content">
						{event.stat} +{event.change}
					</div>
				</div>
			);
		}
	});

	let availableSkills = getAvailableSkills(props.char).map((skill) => {
		if (typeof skill == "string") {
			return (
				<div key={skill} className="flexcol event">
					<div className="content">Skill: {skills[skill].name}</div>
				</div>
			);
		} else {
			let key = `${skill.count}:${skill.skills.join(",")}`;
			let content = skill.skills.map((skill) => (
				<div key={skill} className="content">
					Skill: {skills[skill].name}
				</div>
			));
			return (
				<div key={key} className="flexcol event">
					<div className="title">Choose {skill.count}:</div>
					{content}
				</div>
			);
		}
	});

	let shallyasMercy = PrimaryStatNames.filter(
		(stat) => props.char.statRolls[stat] < 11
	).map((stat) => (
		<div key={stat} className="content">
			{stat}{" "}
			{props.char.statRolls[stat] + races[props.char.race].baseStats[stat]} →{" "}
			{11 + races[props.char.race].baseStats[stat]}
		</div>
	));
	if (shallyasMercy.length == 0) {
		shallyasMercy = [<div className="content">Not applicable</div>];
	}

	return (
		<div className="flexcol history">
			<div className="header">HISTORY</div>
			<div className="flexcol event">
				<div className="title">Shallya's Mercy</div>
				{shallyasMercy}
			</div>
			{history}
			<div className="header">ADVANCES</div>
			{availableSkills}
		</div>
	);
}
