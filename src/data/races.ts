import { PrimaryStatBlock } from './stats';
import { initDieTable, d10, d100 } from '../dice';
import { CareerName } from './careers';

export interface Race {
	name: string;
	baseStats: PrimaryStatBlock;
	baseWoundTable: number[];
	baseFatePointTable: number[];
	baseMovement: number;
	careerTable: CareerName[];
	birthplace: () => string;
	baseHeightMale: number;
	baseHeightFemale: number;
	weightTable: number[];
	baseAge: number;
	ageStep: number;
}

let MakeRace = (race: Race) => race;

let GetHumanBirthplace = () => {
	let place = ["Averland", "Hochland", "Middenland", "Nordland", "Ostermark", "Ostland", "Reikland", "Stirland", "Talabecland", "Wissenland"][d10()-1];
	let type = ["City", "Prosperous Town", "Market Town", "Fortified Town", "Farming Village", "Poor Village", "Small Settlement", "Pig/Cattle Farm", "Arable Farm", "Hovel"][d10()-1];
	return `${type} in ${place}`;
};
let GetElfBirthplace = () => initDieTable<string>([20, "City of Altdorf"], [40, "City of Marienburg"], [70, "Laurelorn Forest"], [85, "The Great Forest"], [100, "Reikwald Forest"])[d100()-1];
let GetHalflingBirthplace = () => initDieTable<string>([50, GetHumanBirthplace()], [100, "the Moot"])[d100()-1];
let GetDwarfBirthplace = () => initDieTable<string>([30, GetHumanBirthplace()], [40, "Karak Norn (Grey Mountains)"], [50, "Karak Izor (the Vaults)"], [60, "Karak Hirn (Black Mountains)"], [70, "Karak Kadrin (World's Edge Mountains)"], [80, "Karaz-a-Karak (World's Edge Mountains"], [90, "Zhufbar (World's Edge Mountains)"], [100, "Karak Varr (the Black Gulf)"])[d100()-1];

export const races = {
	Human: MakeRace({
		name: "Human",
		baseStats: { WS: 20, BS: 20, S: 20, T: 20, AG: 20, INT: 20, WP: 20, FEL: 20 },
		baseWoundTable: initDieTable([3, 10], [6, 11], [9, 12], [10, 13]),
		baseFatePointTable: initDieTable([4, 2], [10, 3]),
		baseMovement: 4,
		careerTable: initDieTable<CareerName>([12, "Agitator"], [16, "Anchorite"], [28, "Apothecary"], [36, "Apprentice Witch"], [52, "Apprentice Wizard"], [60, "Badlander"], [72, "Bailiff"], [84, "Barber-Surgeon"], [92, "Bear Tamer"], [108, "Boatman"], [124, "Bodyguard"], [128, "Bondsman"], [136, "Bonepicker"], [148, "Bounty Hunter"], [160, "Burgher"], [164, "Cadet"], [172, "Camp Follower"], [176, "Carcassonne Shepherd"], [184, "Cartographer"], [188, "Cenobite"], [196, "Charcoal Burner"], [200, "Chekist"], [212, "Chimneysweep"], [224, "Coachman"], [228, "Deepwatcher"], [240, "Dilettante"], [248, "Drover"], [256, "Dung Collector"], [260, "Embalmer"], [276, "Entertainer"], [280, "Estalian Diestro"], [288, "Ex-convict"], [300, "Exciseman"], [312, "Farmer"], [320, "Ferryman"], [332, "Fisherman"], [336, "Freeholder"], [340, "Frogwife"], [352, "Gambler"], [360, "Grail Pilgrim"], [368, "Grave Robber"], [376, "Grave Warden"], [388, "Hedge Wizard"], [396, "Hedgecraft Apprentice"], [404, "Herrimault"], [408, "Horned Hunter"], [416, "Horse Coper"], [428, "Hunter"], [444, "Initiate"], [452, "Jailer"], [460, "Kislevite Kossar"], [472, "Knight Errant"], [480, "Lamplighter"], [484, "Litigant"], [496, "Man-at-Arms"], [500, "Marauder"], [516, "Marine"], [520, "Mediator"], [536, "Mercenary"], [544, "Messenger"], [556, "Militiaman"], [564, "Miner"], [572, "Muleskinner"], [576, "Newssheet Vendor"], [592, "Noble"], [596, "Norse Berserker"], [612, "Outlaw"], [620, "Outrider"], [632, "Peasant"], [636, "Penitent"], [648, "Pilgrim"], [660, "Pit Fighter"], [672, "Protagonist"], [684, "Raconteur"], [704, "Rat Catcher"], [708, "Reaver"], [716, "Riverwarden"], [732, "Roadwarden"], [748, "Rogue"], [760, "Scribe"], [772, "Seaman"], [780, "Seer"], [788, "Servant"], [796, "Sewer Jack"], [800, "Skald"], [804, "Slave"], [812, "Smuggler"], [824, "Soldier"], [832, "SQuire"], [836, "Steppes Nomad"], [840, "Stevedore"], [844, "Streltsi"], [848, "Strigany Mystic"], [860, "Student"], [864, "Swamp Skimmer"], [868, "Swampaire"], [872, "Temple Guardian"], [888, "Thief"], [900, "Thug"], [904, "Toll Keeper"], [916, "Tomb Robber"], [932, "Tradesman"], [940, "Vagabond"], [948, "Valet"], [960, "Watchman"], [968, "Whaler"], [980, "Wise Woman"], [992, "Woodsman"], [996, "Wrecker"], [1000, "Zealot"]),
		birthplace: GetHumanBirthplace,
		baseHeightMale: 64,
		baseHeightFemale: 61,
		weightTable: initDieTable([1, 105], [3, 110], [5, 115], [8, 120], [12, 125], [17, 130], [22, 135], [29, 140], [37, 145], [49, 150], [64, 155], [71, 160], [78, 165], [83, 170], [88, 175], [92, 180], [95, 190], [97, 200], [99, 210], [100, 220]),
		baseAge: 16,
		ageStep: 1,
	}),
	Elf: MakeRace({
		name: "Elf",
		baseStats: { WS: 20, BS: 30, S: 20, T: 20, AG: 30, INT: 20, WP: 20, FEL: 20 },
		baseWoundTable: initDieTable([3, 9], [6, 10], [9, 11], [10, 12]),
		baseFatePointTable: initDieTable([4, 1], [10, 2]),
		baseMovement: 5,
		careerTable: initDieTable<CareerName>([7, "Apothecary"], [64, "Apprentice Wizard"], [78, "Bodyguard"], [99, "Bounty Hunter"], [113, "Cartographer"], [141, "Dilettante"], [176, "Entertainer"], [218, "Envoy"], [222, "Gambler"], [278, "Hunter"], [292, "Initiate"], [342, "Kithband Warrior"], [377, "Marine"], [412, "Mercenary"], [450, "Messenger"], [464, "Noble"], [494, "Outlaw"], [534, "Outrider"], [548, "Pilgrim"], [562, "Pit Fighter"], [600, "Raconteur"], [625, "Riverwarden"], [665, "Rogue"], [705, "Scribe"], [745, "Seaman"], [752, "Slave"], [780, "Smuggler"], [815, "Student"], [856, "Thief"], [869, "Thug"], [919, "Tradesman"], [961, "Vagabond"], [1000, "Woodsman"]),
		birthplace: GetElfBirthplace,
		baseHeightMale: 66,
		baseHeightFemale: 64,
		weightTable: initDieTable([1, 80], [3, 85], [5, 90], [8, 95], [12, 100], [17, 105], [22, 110], [29, 115], [37, 120], [49, 125], [64, 130], [71, 135], [78, 140], [83, 145], [88, 150], [92, 155], [95, 160], [97, 165], [99, 170], [100, 175]),
		baseAge: 30,
		ageStep: 5,
	}),
	Dwarf: MakeRace({
		name: "Dwarf",
		baseStats: { WS: 30, BS: 20, S: 20, T: 30, AG: 10, INT: 20, WP: 20, FEL: 10 },
		baseWoundTable: initDieTable([3, 11], [6, 12], [9, 13], [10, 14]),
		baseFatePointTable: initDieTable([4, 1], [7, 2], [10, 3]),
		baseMovement: 3,
		careerTable: initDieTable<CareerName>([15, "Agitator"], [57, "Apprentice Runesmith"], [85, "Bodyguard"], [100, "Bounty Hunter"], [121, "Burgher"], [136, "Cartographer"], [151, "Coachman"], [166, "Dilettante"], [187, "Entertainer"], [202, "Ex-convict"], [217, "Gambler"], [245, "Hunter"], [260, "Initiate"], [288, "Jailer"], [330, "Mercenary"], [358, "Militiaman"], [400, "Miner"], [421, "Muleskinner"], [436, "Noble"], [457, "Outlaw"], [472, "Pilgrim"], [507, "Pit Fighter"], [535, "Protagonist"], [550, "Raconteur"], [578, "Rat Catcher"], [606, "Rogue"], [641, "Runebearer"], [656, "Scribe"], [664, "Seaman"], [679, "Servant"], [694, "Sewer Jack"], [722, "Shieldbreaker"], [730, "Slave"], [751, "Smuggler"], [779, "Soldier"], [794, "Stevedore"], [809, "Student"], [824, "Temple Guardian"], [845, "Thief"], [860, "Thug"], [875, "Toll Keeper"], [896, "Tomb Robber"], [924, "Tradesman"], [952, "Troll Slayer"], [980, "Vagabond"], [1000, "Watchman"]),
		birthplace: GetDwarfBirthplace,
		baseHeightMale: 52,
		baseHeightFemale: 50,
		weightTable: initDieTable([1, 90], [3, 95], [5, 100], [8, 105], [12, 110], [17, 115], [22, 120], [29, 125], [37, 130], [49, 135], [64, 140], [71, 145], [78, 150], [83, 155], [88, 160], [92, 165], [95, 170], [97, 175], [99, 180], [100, 185]),
		baseAge: 20,
		ageStep: 5,
	}),
	Halfling: MakeRace({
		name: "Halfling",
		baseStats: { WS: 10, BS: 30, S: 10, T: 10, AG: 30, INT: 20, WP: 20, FEL: 30 },
		baseWoundTable: initDieTable([3, 8], [6, 9], [9, 10], [10, 11]),
		baseFatePointTable: initDieTable([7, 2], [10, 3]),
		baseMovement: 4,
		careerTable: initDieTable<CareerName>([20, "Agitator"], [33, "Apothecary"], [40, "Badlander"], [53, "Bailiff"], [60, "Barber-Surgeon"], [67, "Bonepicker"], [80, "Bounty Hunter"], [93, "Burgher"], [106, "Camp Follower"], [119, "Cartographer"], [139, "Charcoal Burner"], [172, "Chimneysweep"], [192, "Dilettante"], [199, "Dung Collector"], [206, "Embalmer"], [226, "Entertainer"], [233, "Ex-convict"], [240, "Exciseman"], [253, "Farmer"], [260, "Ferryman"], [293, "Fieldwarden"], [306, "Fisherman"], [319, "Gambler"], [349, "Grave Robber"], [356, "Grave Warden"], [389, "Hunter"], [402, "Initiate"], [415, "Lamplighter"], [428, "Litigant"], [453, "Mercenary"], [486, "Messenger"], [511, "Militiaman"], [518, "Muleskinner"], [538, "Newssheet Vendor"], [551, "Noble"], [571, "Outlaw"], [596, "Peasant"], [609, "Pilgrim"], [638, "Raconteur"], [648, "Rat Catcher"], [681, "Rogue"], [694, "Scribe"], [732, "Servant"], [745, "Sewer Jack"], [752, "Slave"], [772, "Smuggler"], [785, "Soldier"], [798, "Student"], [811, "Temple Guardian"], [849, "Thief"], [852, "Thug"], [865, "Toll Keeper"], [898, "Tomb Robber"], [931, "Tradesman"], [956, "Vagabond"], [976, "Valet"], [1000, "Watchman"]),
		birthplace: GetHalflingBirthplace,
		baseHeightMale: 38,
		baseHeightFemale: 40,
		weightTable: initDieTable([1, 75], [3, 75], [5, 80], [8, 80], [12, 85], [17, 85], [22, 90], [29, 90], [37, 95], [49, 100], [64, 100], [71, 105], [78, 110], [83, 115], [88, 120], [92, 125], [95, 130], [97, 135], [99, 140], [100, 145]),
		baseAge: 20,
		ageStep: 2,
	}),
};

export type RaceName = keyof typeof races