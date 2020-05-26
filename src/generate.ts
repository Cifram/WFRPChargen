import { RaceName, races } from './data/races';
import { Character } from './state/character';
import { d10, d100, d1000 } from './dice';
import { StatBlock } from './data/stats';

export function generate(race: RaceName, gender: "Male" | "Female") : Character {
	const rolls: StatBlock = {
		WS: d10() + d10(),
		BS: d10() + d10(),
		S: d10() + d10(),
		T: d10() + d10(),
		AG: d10() + d10(),
		INT: d10() + d10(),
		WP: d10() + d10(),
		FEL: d10() + d10(),
		A: 1,
		W: races[race].baseWoundTable[d10()-1],
		SB: 0,
		TB: 0,
		MV: races[race].baseMovement,
		MAG: 0,
		IP: 0,
		FP: races[race].baseFatePointTable[d10()-1],
	};
	return {
		name: "Foo Barson",
		race: race,
		career: races[race].careerTable[d1000()-1],
		history: [],
		birthplace: races[race].birthplace(),
		age: Math.ceil(d100()/5) * races[race].ageStep + races[race].baseAge,
		gender: gender,
		weight: races[race].weightTable[d100()-1],
		height: (gender == "Male" ? races[race].baseHeightMale : races[race].baseHeightFemale) + d10(),
		statRolls: rolls,
		shallyasMercy: null,
	};
}