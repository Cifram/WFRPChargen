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
		characteristic: "Int",
	}),
	"Academic Knowledge (Astronomy)": MakeSkill({
		name: "Academic Knowledge (Astronomy)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Academic Knowledge (Daemonology)": MakeSkill({
		name: "Academic Knowledge (Daemonology)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Academic Knowledge (Engineering)": MakeSkill({
		name: "Academic Knowledge (Engineering)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Academic Knowledge (Genealogy/Heraldry)": MakeSkill({
		name: "Academic Knowledge (Geneolofy/Heraldry)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Academic Knowledge (Geography)": MakeSkill({
		name: "Academic Knowledge (Geography)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Academic Knowledge (History)": MakeSkill({
		name: "Academic Knowledge (History)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Academic Knowledge (Law)": MakeSkill({
		name: "Academic Knowledge (Law)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Academic Knowledge (Magic)": MakeSkill({
		name: "Academic Knowledge (Magic)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Academic Knowledge (Necromancy)": MakeSkill({
		name: "Academic Knowledge (Necromancy)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Academic Knowledge (Philosophy)": MakeSkill({
		name: "Academic Knowledge (Philosophy)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Academic Knowledge (Runes)": MakeSkill({
		name: "Academic Knowledge (Runes)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Academic Knowledge (Science)": MakeSkill({
		name: "Academic Knowledge (Science)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Academic Knowledge (Spirits)": MakeSkill({
		name: "Academic Knowledge (Spirits)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Academic Knowledge (Strategy/Tactics)": MakeSkill({
		name: "Academic Knowledge (Strategy/Tactics)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Academic Knowledge (Theology)": MakeSkill({
		name: "Academic Knowledge (Theology)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Animal Care": MakeSkill({
		name: "Animal Care",
		type: "Basic",
		characteristic: "Int",
	}),
	"Animal Training": MakeSkill({
		name: "Animal Training",
		type: "Advanced",
		characteristic: "Fel",
	}),
	Blather: MakeSkill({
		name: "Blather",
		type: "Advanced",
		characteristic: "Fel",
	}),
	Channelling: MakeSkill({
		name: "Channelling",
		type: "Advanced",
		characteristic: "WP",
	}),
	Charm: MakeSkill({
		name: "Charm",
		type: "Basic",
		characteristic: "Fel",
	}),
	"Charm Animal": MakeSkill({
		name: "Charm Animal",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Common Knowledge (Border Princes)": MakeSkill({
		name: "Common Knowledge (Border Princes)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Common Knowledge (Bretonnia)": MakeSkill({
		name: "Common Knowledge (Bretonnia)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Common Knowledge (Chaos Wastes)": MakeSkill({
		name: "Common Knowledge (Chaos Wastes)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Common Knowledge (Dwarves)": MakeSkill({
		name: "Common Knowledge (Dwarves)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Common Knowledge (Elves)": MakeSkill({
		name: "Common Knowledge (Elves)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Common Knowledge (the Empire)": MakeSkill({
		name: "Common Knowledge (the Empire)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Common Knowledge (Estalia)": MakeSkill({
		name: "Common Knowledge (Estalia)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Common Knowledge (Halflings)": MakeSkill({
		name: "Common Knowledge (Halflings)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Common Knowledge (Kislev)": MakeSkill({
		name: "Common Knowledge (Kislev)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Common Knowledge (Lustria)": MakeSkill({
		name: "Common Knowledge (Lustria)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Common Knowledge (Norsca)": MakeSkill({
		name: "Common Knowledge (Norsca)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Common Knowledge (Ogres)": MakeSkill({
		name: "Common Knowledge (Ogres)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Common Knowledge (Skaven)": MakeSkill({
		name: "Common Knowledge (Skaven)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Common Knowledge (Southlands)": MakeSkill({
		name: "Common Knowledge (Southlands)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Common Knowledge (Tilea)": MakeSkill({
		name: "Common Knowledge (Tilea)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Common Knowledge (the Wasteland)": MakeSkill({
		name: "Common Knowledge (the Wasteland)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Common Knowledge (Troll Country)": MakeSkill({
		name: "Common Knowledge (Troll Country)",
		type: "Advanced",
		characteristic: "Int",
	}),
	Command: MakeSkill({
		name: "Command",
		type: "Basic",
		characteristic: "Fel",
	}),
	Concealment: MakeSkill({
		name: "Concealment",
		type: "Basic",
		characteristic: "Ag",
	}),
	"Consume Alcohol": MakeSkill({
		name: "Consume Alcohol",
		type: "Basic",
		characteristic: "T",
	}),
	Disguise: MakeSkill({
		name: "Disguise",
		type: "Basic",
		characteristic: "Fel",
	}),
	"Dodge Blow": MakeSkill({
		name: "Dodge Blow",
		type: "Advanced",
		characteristic: "Ag",
	}),
	Drive: MakeSkill({
		name: "Drive",
		type: "Basic",
		characteristic: "S",
	}),
	Evaluate: MakeSkill({
		name: "Evaluate",
		type: "Basic",
		characteristic: "Int",
	}),
	"Follow Trail": MakeSkill({
		name: "Follow Trail",
		type: "Advanced",
		characteristic: "Int",
	}),
	Gamble: MakeSkill({
		name: "Gamble",
		type: "Basic",
		characteristic: "Int",
	}),
	Gossip: MakeSkill({
		name: "Gossip",
		type: "Basic",
		characteristic: "Fel",
	}),
	Haggle: MakeSkill({
		name: "Haggle",
		type: "Basic",
		characteristic: "Fel",
	}),
	Heal: MakeSkill({
		name: "Heal",
		type: "Advanced",
		characteristic: "Int",
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
		characteristic: "Int",
	}),
	"Outdoor Survival": MakeSkill({
		name: "Outdoor Survival",
		type: "Basic",
		characteristic: "Int",
	}),
	"Magical Sense": MakeSkill({
		name: "Magical Sense",
		type: "Advanced",
		characteristic: "WP",
	}),
	Navigation: MakeSkill({
		name: "Navigation",
		type: "Advanced",
		characteristic: "Int",
	}),
	Perception: MakeSkill({
		name: "Perception",
		type: "Basic",
		characteristic: "Int",
	}),
	"Performer (Acrobat)": MakeSkill({
		name: "Performer (Acrobat)",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Performer (Actor)": MakeSkill({
		name: "Performer (Actor)",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Performer (Clown)": MakeSkill({
		name: "Performer (Clown)",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Performer (Comedian)": MakeSkill({
		name: "Performer (Comedian)",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Performer (Dancer)": MakeSkill({
		name: "Performer (Dancer)",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Performer (Fire Eater)": MakeSkill({
		name: "Performer (Fire Eater)",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Performer (Jester)": MakeSkill({
		name: "Performer (Jester)",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Performer (Juggler)": MakeSkill({
		name: "Performer (Juggler)",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Performer (Mime)": MakeSkill({
		name: "Performer (Mime)",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Performer (Musician)": MakeSkill({
		name: "Performer (Musician)",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Performer (Palm Reader)": MakeSkill({
		name: "Performer (Palm Reader)",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Performer (Singer)": MakeSkill({
		name: "Performer (Singer)",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Performer (Storyteller)": MakeSkill({
		name: "Performer (Storyteller)",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Pick Lock": MakeSkill({
		name: "Pick Lock",
		type: "Advanced",
		characteristic: "Ag",
	}),
	"Prepare Poison": MakeSkill({
		name: "Prepare Poison",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Read/Write": MakeSkill({
		name: "Read/Write",
		type: "Advanced",
		characteristic: "Int",
	}),
	Ride: MakeSkill({
		name: "Ride",
		type: "Basic",
		characteristic: "Ag",
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
		characteristic: "Ag",
	}),
	"Scale Sheer Surface": MakeSkill({
		name: "Scale Sheer Surface",
		type: "Basic",
		characteristic: "S",
	}),
	Search: MakeSkill({
		name: "Search",
		type: "Basic",
		characteristic: "Int",
	}),
	"Secret Language (Battle Tongue)": MakeSkill({
		name: "Secret Language (Battle Tongue)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Secret Language (Guild Tongue)": MakeSkill({
		name: "Secret Language (Guild Tongue)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Secret Language (Prison Cant)": MakeSkill({
		name: "Secret Language (Prison Cant)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Secret Language (Thieves' Tongue)": MakeSkill({
		name: "Secret Language (Thieves' Tongue)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Secret Language (Ranger Tongue)": MakeSkill({
		name: "Secret Language (Ranger Tongue)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Secret Signs (Astrologer)": MakeSkill({
		name: "Secret Signs (Astrologer)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Secret Signs (Scout)": MakeSkill({
		name: "Secret Signs (Scout)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Secret Signs (Templar)": MakeSkill({
		name: "Secret Signs (Templar)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Secret Signs (Thief)": MakeSkill({
		name: "Secret Signs (Thief)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Secret Signs (Ranger)": MakeSkill({
		name: "Secret Signs (Ranger)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Set Trap": MakeSkill({
		name: "Set Trap",
		type: "Advanced",
		characteristic: "Ag",
	}),
	Shadowing: MakeSkill({
		name: "Shadowing",
		type: "Advanced",
		characteristic: "Ag",
	}),
	"Silent Move": MakeSkill({
		name: "Silent Move",
		type: "Basic",
		characteristic: "Ag",
	}),
	"Sleight of Hand": MakeSkill({
		name: "Sleight of Hand",
		type: "Advanced",
		characteristic: "Ag",
	}),
	"Speak Arcane Language (Magick)": MakeSkill({
		name: "Speak Arcane Language (Magick)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Arcane Language (Daemonic)": MakeSkill({
		name: "Speak Arcane Language (Daemonic)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Arcane Language (Arcane Dwarf)": MakeSkill({
		name: "Speak Arcane Language (Arcane Dwarf)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Arcane Language (Arcane Elf)": MakeSkill({
		name: "Speak Arcane Language (Arcane Elf)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Language (Arabyan)": MakeSkill({
		name: "Speak Language (Arabyan)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Language (Breton)": MakeSkill({
		name: "Speak Language (Breton)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Language (Classical)": MakeSkill({
		name: "Speak Language (Classical)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Language (Dark Tongue)": MakeSkill({
		name: "Speak Language (Dark Tongue)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Language (Eltharin)": MakeSkill({
		name: "Speak Language (Eltharin)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Language (Estalian)": MakeSkill({
		name: "Speak Language (Estalian)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Language (Grumbarth)": MakeSkill({
		name: "Speak Language (Grumbarth)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Language (Halfling)": MakeSkill({
		name: "Speak Language (Halfling)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Language (Khazalid)": MakeSkill({
		name: "Speak Language (Khazalid)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Language (Kislevian)": MakeSkill({
		name: "Speak Language (Kislevian)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Language (Norse)": MakeSkill({
		name: "Speak Language (Norse)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Language (Queekish)": MakeSkill({
		name: "Speak Language (Queekish)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Language (Reikspiel)": MakeSkill({
		name: "Speak Language (Reikspiel)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Language (Strigany)": MakeSkill({
		name: "Speak Language (Strigany)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Language (the Goblin Tongue)": MakeSkill({
		name: "Speak Language (the Goblin Tongue)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Language (Tilean)": MakeSkill({
		name: "Speak Language (Tilean)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Speak Language (Ungol)": MakeSkill({
		name: "Speak Language (Ungol)",
		type: "Advanced",
		characteristic: "Int",
	}),
	Swim: MakeSkill({
		name: "Swim",
		type: "Basic",
		characteristic: "S",
	}),
	Torture: MakeSkill({
		name: "Torture",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Trade (Apothecary)": MakeSkill({
		name: "Trade (Apothecary)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Trade (Armourer)": MakeSkill({
		name: "Trade (Armourer)",
		type: "Advanced",
		characteristic: "S",
	}),
	"Trade (Artist)": MakeSkill({
		name: "Trade (Artist)",
		type: "Advanced",
		characteristic: "Ag",
	}),
	"Trade (Aviarist)": MakeSkill({
		name: "Trade (Aviarist)",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Trade (Bowyer)": MakeSkill({
		name: "Trade (Bowyer)",
		type: "Advanced",
		characteristic: "Ag",
	}),
	"Trade (Brewer)": MakeSkill({
		name: "Trade (Brewer)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Trade (Calligrapher)": MakeSkill({
		name: "Trade (Calligrapher)",
		type: "Advanced",
		characteristic: "Ag",
	}),
	"Trade (Candlemaker)": MakeSkill({
		name: "Trade (Candlemaker)",
		type: "Advanced",
		characteristic: "Ag",
	}),
	"Trade (Carpenter)": MakeSkill({
		name: "Trade (Carpenter)",
		type: "Advanced",
		characteristic: "Ag",
	}),
	"Trade (Cartographer)": MakeSkill({
		name: "Trade (Cartographer)",
		type: "Advanced",
		characteristic: "Ag",
	}),
	"Trade (Cook)": MakeSkill({
		name: "Trade (Cook)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Trade (Cooper)": MakeSkill({
		name: "Trade (Cooper)",
		type: "Advanced",
		characteristic: "S",
	}),
	"Trade (Embalmer)": MakeSkill({
		name: "Trade (Embalmer)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Trade (Farmer)": MakeSkill({
		name: "Trade (Farmer)",
		type: "Advanced",
		characteristic: "S",
	}),
	"Trade (Cutter)": MakeSkill({
		name: "Trade (Cutter)",
		type: "Advanced",
		characteristic: "Ag",
	}),
	"Trade (Goldsmith)": MakeSkill({
		name: "Trade (Goldsmith)",
		type: "Advanced",
		characteristic: "Ag",
	}),
	"Trade (Gunsmith)": MakeSkill({
		name: "Trade (Gunsmith)",
		type: "Advanced",
		characteristic: "Ag",
	}),
	"Trade (Herbalist)": MakeSkill({
		name: "Trade (Herbalist)",
		type: "Advanced",
		characteristic: "Int",
	}),
	"Trade (Horse Trader)": MakeSkill({
		name: "Trade (Horse Trader)",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Trade (Kennel Master)": MakeSkill({
		name: "Trade (Kennel Master)",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Trade (Merchant)": MakeSkill({
		name: "Trade (Merchant)",
		type: "Advanced",
		characteristic: "Fel",
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
		characteristic: "Int",
	}),
	"Trade (Shoemaker)": MakeSkill({
		name: "Trade (Shoemaker)",
		type: "Advanced",
		characteristic: "Ag",
	}),
	"Trade (Smith)": MakeSkill({
		name: "Trade (Smith)",
		type: "Advanced",
		characteristic: "S",
	}),
	"Trade (Stableman)": MakeSkill({
		name: "Trade (Stableman)",
		type: "Advanced",
		characteristic: "Fel",
	}),
	"Trade (Stoneworker)": MakeSkill({
		name: "Trade (Stoneworker)",
		type: "Advanced",
		characteristic: "Ag",
	}),
	"Trade (Tailor)": MakeSkill({
		name: "Trade (Tailor)",
		type: "Advanced",
		characteristic: "Ag",
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
		characteristic: "Fel",
	}),
};

export type SkillName = keyof typeof skills;
export type SkillMastery = 0 | 1 | 2;
