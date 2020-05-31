import { PrimaryStat } from "./stats";

export interface Skill {
	name: string;
	type: "Basic" | "Advanced";
	characteristic: PrimaryStat;
}

let MakeSkill = (skill: Skill) => skill;

export const skills = {
	"Academic Knowledge (Arts)": MakeSkill({
		name: "Academic Knowledge (Arts)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Academic Knowledge (Astronomy)": MakeSkill({
		name: "Academic Knowledge (Astronomy)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Academic Knowledge (Daemonology)": MakeSkill({
		name: "Academic Knowledge (Daemonology)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Academic Knowledge (Engineering)": MakeSkill({
		name: "Academic Knowledge (Engineering)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Academic Knowledge (Genealogy/Heraldry)": MakeSkill({
		name: "Academic Knowledge (Geneolofy/Heraldry)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Academic Knowledge (Geography)": MakeSkill({
		name: "Academic Knowledge (Geography)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Academic Knowledge (History)": MakeSkill({
		name: "Academic Knowledge (History)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Academic Knowledge (Law)": MakeSkill({
		name: "Academic Knowledge (Law)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Academic Knowledge (Magic)": MakeSkill({
		name: "Academic Knowledge (Magic)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Academic Knowledge (Necromancy)": MakeSkill({
		name: "Academic Knowledge (Necromancy)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Academic Knowledge (Philosophy)": MakeSkill({
		name: "Academic Knowledge (Philosophy)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Academic Knowledge (Runes)": MakeSkill({
		name: "Academic Knowledge (Runes)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Academic Knowledge (Science)": MakeSkill({
		name: "Academic Knowledge (Science)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Academic Knowledge (Spirits)": MakeSkill({
		name: "Academic Knowledge (Spirits)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Academic Knowledge (Strategy/Tactics)": MakeSkill({
		name: "Academic Knowledge (Strategy/Tactics)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Academic Knowledge (Theology)": MakeSkill({
		name: "Academic Knowledge (Theology)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Animal Care": MakeSkill({
		name: "Animal Care",
		type: "Basic",
		characteristic: "INT",
	}),
	"Animal Training": MakeSkill({
		name: "Animal Training",
		type: "Advanced",
		characteristic: "FEL",
	}),
	Blather: MakeSkill({
		name: "Blather",
		type: "Advanced",
		characteristic: "FEL",
	}),
	Channelling: MakeSkill({
		name: "Channelling",
		type: "Advanced",
		characteristic: "WP",
	}),
	Charm: MakeSkill({
		name: "Charm",
		type: "Basic",
		characteristic: "FEL",
	}),
	"Charm Animal": MakeSkill({
		name: "Charm Animal",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Common Knowledge (Border Princes)": MakeSkill({
		name: "Common Knowledge (Border Princes)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Common Knowledge (Bretonnia)": MakeSkill({
		name: "Common Knowledge (Bretonnia)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Common Knowledge (Chaos Wastes)": MakeSkill({
		name: "Common Knowledge (Chaos Wastes)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Common Knowledge (Dwarves)": MakeSkill({
		name: "Common Knowledge (Dwarves)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Common Knowledge (Elves)": MakeSkill({
		name: "Common Knowledge (Elves)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Common Knowledge (the Empire)": MakeSkill({
		name: "Common Knowledge (the Empire)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Common Knowledge (Estalia)": MakeSkill({
		name: "Common Knowledge (Estalia)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Common Knowledge (Halflings)": MakeSkill({
		name: "Common Knowledge (Halflings)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Common Knowledge (Kislev)": MakeSkill({
		name: "Common Knowledge (Kislev)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Common Knowledge (Lustria)": MakeSkill({
		name: "Common Knowledge (Lustria)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Common Knowledge (Norsca)": MakeSkill({
		name: "Common Knowledge (Norsca)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Common Knowledge (Ogres)": MakeSkill({
		name: "Common Knowledge (Ogres)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Common Knowledge (Skaven)": MakeSkill({
		name: "Common Knowledge (Skaven)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Common Knowledge (Southlands)": MakeSkill({
		name: "Common Knowledge (Southlands)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Common Knowledge (Tilea)": MakeSkill({
		name: "Common Knowledge (Tilea)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Common Knowledge (the Wasteland)": MakeSkill({
		name: "Common Knowledge (the Wasteland)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Common Knowledge (Troll Country)": MakeSkill({
		name: "Common Knowledge (Troll Country)",
		type: "Advanced",
		characteristic: "INT",
	}),
	Command: MakeSkill({
		name: "Command",
		type: "Basic",
		characteristic: "FEL",
	}),
	Concealment: MakeSkill({
		name: "Concealment",
		type: "Basic",
		characteristic: "AG",
	}),
	"Consume Alcohol": MakeSkill({
		name: "Consume Alcohol",
		type: "Basic",
		characteristic: "T",
	}),
	Disguise: MakeSkill({
		name: "Disguise",
		type: "Basic",
		characteristic: "FEL",
	}),
	"Dodge Blow": MakeSkill({
		name: "Dodge Blow",
		type: "Advanced",
		characteristic: "AG",
	}),
	Drive: MakeSkill({
		name: "Drive",
		type: "Basic",
		characteristic: "S",
	}),
	Evaluate: MakeSkill({
		name: "Evaluate",
		type: "Basic",
		characteristic: "INT",
	}),
	"Follow Trail": MakeSkill({
		name: "Follow Trail",
		type: "Advanced",
		characteristic: "INT",
	}),
	Gamble: MakeSkill({
		name: "Gamble",
		type: "Basic",
		characteristic: "INT",
	}),
	Gossip: MakeSkill({
		name: "Gossip",
		type: "Basic",
		characteristic: "FEL",
	}),
	Haggle: MakeSkill({
		name: "Haggle",
		type: "Basic",
		characteristic: "FEL",
	}),
	Heal: MakeSkill({
		name: "Heal",
		type: "Advanced",
		characteristic: "INT",
	}),
	Hypnotism: MakeSkill({
		name: "Hypnotism",
		type: "Advanced",
		characteristic: "WP",
	}),
	Intimidate: MakeSkill({
		name: "Intimidate",
		type: "Basic",
		characteristic: "S",
	}),
	"Lip Reading": MakeSkill({
		name: "Lip Reading",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Outdoor Survival": MakeSkill({
		name: "Outdoor Survival",
		type: "Basic",
		characteristic: "INT",
	}),
	"Magical Sense": MakeSkill({
		name: "Magical Sense",
		type: "Advanced",
		characteristic: "WP",
	}),
	Navigation: MakeSkill({
		name: "Navigation",
		type: "Advanced",
		characteristic: "INT",
	}),
	Perception: MakeSkill({
		name: "Perception",
		type: "Basic",
		characteristic: "INT",
	}),
	"Performer (Acrobat)": MakeSkill({
		name: "Performer (Acrobat)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Performer (Actor)": MakeSkill({
		name: "Performer (Actor)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Performer (Clown)": MakeSkill({
		name: "Performer (Clown)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Performer (Comedian)": MakeSkill({
		name: "Performer (Comedian)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Performer (Dancer)": MakeSkill({
		name: "Performer (Dancer)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Performer (Fire Eater)": MakeSkill({
		name: "Performer (Fire Eater)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Performer (Jester)": MakeSkill({
		name: "Performer (Jester)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Performer (Juggler)": MakeSkill({
		name: "Performer (Juggler)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Performer (Mime)": MakeSkill({
		name: "Performer (Mime)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Performer (Musician)": MakeSkill({
		name: "Performer (Musician)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Performer (Palm Reader)": MakeSkill({
		name: "Performer (Palm Reader)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Performer (Singer)": MakeSkill({
		name: "Performer (Singer)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Performer (Storyteller)": MakeSkill({
		name: "Performer (Storyteller)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Pick Lock": MakeSkill({
		name: "Pick Lock",
		type: "Advanced",
		characteristic: "AG",
	}),
	"Prepare Poison": MakeSkill({
		name: "Prepare Poison",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Read/Write": MakeSkill({
		name: "Read/Write",
		type: "Advanced",
		characteristic: "INT",
	}),
	Ride: MakeSkill({
		name: "Ride",
		type: "Basic",
		characteristic: "AG",
	}),
	Row: MakeSkill({
		name: "Row",
		type: "Basic",
		characteristic: "S",
	}),
	Runecraft: MakeSkill({
		name: "Runecraft",
		type: "Advanced",
		characteristic: "WP",
	}),
	Sail: MakeSkill({
		name: "Sail",
		type: "Advanced",
		characteristic: "AG",
	}),
	"Scale Sheer Surface": MakeSkill({
		name: "Scale Sheer Surface",
		type: "Basic",
		characteristic: "S",
	}),
	Search: MakeSkill({
		name: "Search",
		type: "Basic",
		characteristic: "INT",
	}),
	"Secret Language (Battle Tongue)": MakeSkill({
		name: "Secret Language (Battle Tongue)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Secret Language (Guild Tongue)": MakeSkill({
		name: "Secret Language (Guild Tongue)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Secret Language (Prison Cant)": MakeSkill({
		name: "Secret Language (Prison Cant)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Secret Language (Thieves' Tongue)": MakeSkill({
		name: "Secret Language (Thieves' Tongue)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Secret Language (Ranger Tongue)": MakeSkill({
		name: "Secret Language (Ranger Tongue)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Secret Signs (Astrologer)": MakeSkill({
		name: "Secret Signs (Astrologer)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Secret Signs (Scout)": MakeSkill({
		name: "Secret Signs (Scout)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Secret Signs (Templar)": MakeSkill({
		name: "Secret Signs (Templar)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Secret Signs (Thief)": MakeSkill({
		name: "Secret Signs (Thief)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Secret Signs (Ranger)": MakeSkill({
		name: "Secret Signs (Ranger)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Set Trap": MakeSkill({
		name: "Set Trap",
		type: "Advanced",
		characteristic: "AG",
	}),
	Shadowing: MakeSkill({
		name: "Shadowing",
		type: "Advanced",
		characteristic: "AG",
	}),
	"Silent Move": MakeSkill({
		name: "Silent Move",
		type: "Basic",
		characteristic: "AG",
	}),
	"Sleight of Hand": MakeSkill({
		name: "Sleight of Hand",
		type: "Advanced",
		characteristic: "AG",
	}),
	"Speak Arcane Language (Magick)": MakeSkill({
		name: "Speak Arcane Language (Magick)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Arcane Language (Daemonic)": MakeSkill({
		name: "Speak Arcane Language (Daemonic)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Arcane Language (Arcane Dwarf)": MakeSkill({
		name: "Speak Arcane Language (Arcane Dwarf)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Arcane Language (Arcane Elf)": MakeSkill({
		name: "Speak Arcane Language (Arcane Elf)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Language (Arabyan)": MakeSkill({
		name: "Speak Language (Arabyan)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Language (Breton)": MakeSkill({
		name: "Speak Language (Breton)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Language (Classical)": MakeSkill({
		name: "Speak Language (Classical)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Language (Dark Tongue)": MakeSkill({
		name: "Speak Language (Dark Tongue)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Language (Eltharin)": MakeSkill({
		name: "Speak Language (Eltharin)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Language (Estalian)": MakeSkill({
		name: "Speak Language (Estalian)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Language (Grumbarth)": MakeSkill({
		name: "Speak Language (Grumbarth)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Language (Halfling)": MakeSkill({
		name: "Speak Language (Halfling)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Language (Khazalid)": MakeSkill({
		name: "Speak Language (Khazalid)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Language (Kislevian)": MakeSkill({
		name: "Speak Language (Kislevian)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Language (Norse)": MakeSkill({
		name: "Speak Language (Norse)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Language (Queekish)": MakeSkill({
		name: "Speak Language (Queekish)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Language (Reikspiel)": MakeSkill({
		name: "Speak Language (Reikspiel)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Language (Strigany)": MakeSkill({
		name: "Speak Language (Strigany)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Language (the Goblin Tongue)": MakeSkill({
		name: "Speak Language (the Goblin Tongue)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Language (Tilean)": MakeSkill({
		name: "Speak Language (Tilean)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Speak Language (Ungol)": MakeSkill({
		name: "Speak Language (Ungol)",
		type: "Advanced",
		characteristic: "INT",
	}),
	Swim: MakeSkill({
		name: "Swim",
		type: "Basic",
		characteristic: "S",
	}),
	Torture: MakeSkill({
		name: "Torture",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Trade (Apothecary)": MakeSkill({
		name: "Trade (Apothecary)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Trade (Armourer)": MakeSkill({
		name: "Trade (Armourer)",
		type: "Advanced",
		characteristic: "S",
	}),
	"Trade (Artist)": MakeSkill({
		name: "Trade (Artist)",
		type: "Advanced",
		characteristic: "AG",
	}),
	"Trade (Aviarist)": MakeSkill({
		name: "Trade (Aviarist)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Trade (Bowyer)": MakeSkill({
		name: "Trade (Bowyer)",
		type: "Advanced",
		characteristic: "AG",
	}),
	"Trade (Brewer)": MakeSkill({
		name: "Trade (Brewer)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Trade (Calligrapher)": MakeSkill({
		name: "Trade (Calligrapher)",
		type: "Advanced",
		characteristic: "AG",
	}),
	"Trade (Candlemaker)": MakeSkill({
		name: "Trade (Candlemaker)",
		type: "Advanced",
		characteristic: "AG",
	}),
	"Trade (Carpenter)": MakeSkill({
		name: "Trade (Carpenter)",
		type: "Advanced",
		characteristic: "AG",
	}),
	"Trade (Cartographer)": MakeSkill({
		name: "Trade (Cartographer)",
		type: "Advanced",
		characteristic: "AG",
	}),
	"Trade (Cook)": MakeSkill({
		name: "Trade (Cook)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Trade (Cooper)": MakeSkill({
		name: "Trade (Cooper)",
		type: "Advanced",
		characteristic: "S",
	}),
	"Trade (Embalmer)": MakeSkill({
		name: "Trade (Embalmer)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Trade (Farmer)": MakeSkill({
		name: "Trade (Farmer)",
		type: "Advanced",
		characteristic: "S",
	}),
	"Trade (Cutter)": MakeSkill({
		name: "Trade (Cutter)",
		type: "Advanced",
		characteristic: "AG",
	}),
	"Trade (Goldsmith)": MakeSkill({
		name: "Trade (Goldsmith)",
		type: "Advanced",
		characteristic: "AG",
	}),
	"Trade (Gunsmith)": MakeSkill({
		name: "Trade (Gunsmith)",
		type: "Advanced",
		characteristic: "AG",
	}),
	"Trade (Herbalist)": MakeSkill({
		name: "Trade (Herbalist)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Trade (Horse Trader)": MakeSkill({
		name: "Trade (Horse Trader)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Trade (Kennel Master)": MakeSkill({
		name: "Trade (Kennel Master)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Trade (Merchant)": MakeSkill({
		name: "Trade (Merchant)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Trade (Miller)": MakeSkill({
		name: "Trade (Miller)",
		type: "Advanced",
		characteristic: "S",
	}),
	"Trade (Miner)": MakeSkill({
		name: "Trade (Miner)",
		type: "Advanced",
		characteristic: "S",
	}),
	"Trade (Prospector)": MakeSkill({
		name: "Trade (Prospector)",
		type: "Advanced",
		characteristic: "S",
	}),
	"Trade (Shipwright)": MakeSkill({
		name: "Trade (Shipwright)",
		type: "Advanced",
		characteristic: "INT",
	}),
	"Trade (Shoemaker)": MakeSkill({
		name: "Trade (Shoemaker)",
		type: "Advanced",
		characteristic: "AG",
	}),
	"Trade (Smith)": MakeSkill({
		name: "Trade (Smith)",
		type: "Advanced",
		characteristic: "S",
	}),
	"Trade (Stableman)": MakeSkill({
		name: "Trade (Stableman)",
		type: "Advanced",
		characteristic: "FEL",
	}),
	"Trade (Stoneworker)": MakeSkill({
		name: "Trade (Stoneworker)",
		type: "Advanced",
		characteristic: "AG",
	}),
	"Trade (Tailor)": MakeSkill({
		name: "Trade (Tailor)",
		type: "Advanced",
		characteristic: "AG",
	}),
	"Trade (Tanner)": MakeSkill({
		name: "Trade (Tanner)",
		type: "Advanced",
		characteristic: "S",
	}),
	"Trade (Weaponsmith)": MakeSkill({
		name: "Trade (Weaponsmith)",
		type: "Advanced",
		characteristic: "S",
	}),
	Ventriloquism: MakeSkill({
		name: "Ventriloquism",
		type: "Advanced",
		characteristic: "FEL",
	}),
};

export type SkillName = keyof typeof skills;
