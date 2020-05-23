import { RaceName, races } from './data/races';
import { HistoryStatRolls, HistorySecondaryStats } from './state/history';
import { Character } from './state/character';
import { d10, d1000 } from './dice';

export function generate(race: RaceName) : Character {
	const rolls: HistoryStatRolls = {
		type: "StatRolls",
		WS: d10() + d10(),
		BS: d10() + d10(),
		S: d10() + d10(),
		T: d10() + d10(),
		AG: d10() + d10(),
		INT: d10() + d10(),
		WP: d10() + d10(),
		FEL: d10() + d10(),
		shallyasMercyStat: null,
	};
	const secondary: HistorySecondaryStats = {
		type: "SecondaryStats",
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
		age: 20,
		race: race,
		career: races[race].careerTable[d1000()-1],
		history: [ rolls, secondary ],
	};
}