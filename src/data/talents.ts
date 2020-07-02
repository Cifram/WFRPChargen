import { Stat } from "./stats";
import {
	SkillName,
	performerSkills,
	languageSkills,
	commonKnowledgeSkills,
} from "./skills";

export interface Talent {
	name: string;
	description: string;
	statBonus: { stat: Stat; bonus: number; condition: string | null }[];
	skillBonus: { skill: SkillName; bonus: number; condition: string | null }[];
}

const MakeTalent = (talent: Talent) => talent;

export const talents = {
	"Acute Hearing": MakeTalent({
		name: "Acute Hearing",
		description:
			"Your hearing is exceptionally good. You gain a +20% bonus on Perception Skill Tests that involve listening.",
		statBonus: [],
		skillBonus: [
			{ skill: "Perception", bonus: 20, condition: "when listening" },
		],
	}),
	"Aethyric Attunement": MakeTalent({
		name: "Aethyric Attunement",
		description:
			"You are well attuned to the Aethyr and can more easily manipulate the Winds of Magic. You gain +10% bonus on Channelling and Magical Sense Skill Tests.",
		statBonus: [],
		skillBonus: [
			{ skill: "Channelling", bonus: 10, condition: null },
			{ skill: "Magical Sense", bonus: 10, condition: null },
		],
	}),
	"Alley Cat": MakeTalent({
		name: "Alley Cat",
		description:
			"You are at home on the streets. You gain a +10% bonus on Concealment and Silent Move Skill Tests when in urban locations.",
		statBonus: [],
		skillBonus: [
			{
				skill: "Concealment",
				bonus: 10,
				condition: "in urban locations",
			},
			{
				skill: "Silent Move",
				bonus: 10,
				condition: "in urban locations",
			},
		],
	}),
	Ambidextrous: MakeTalent({
		name: "Ambidextrous",
		description:
			"You can use either hand equally well. You do not suffer the normal –20% WS or BS penalty when using a weapon in your secondary hand.",
		statBonus: [],
		skillBonus: [],
	}),
	"Arcane Lore (Beasts)": MakeTalent({
		name: "Arcane Lore (Beasts)",
		description:
			"You have studied one of the Empire’s traditions of magic, of the Order of Beasts. If you know an Arcane Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Arcane Lore (Death)": MakeTalent({
		name: "Arcane Lore (Death)",
		description:
			"You have studied one of the Empire’s traditions of magic, of the Order of Death. If you know an Arcane Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Arcane Lore (Fire)": MakeTalent({
		name: "Arcane Lore (Fire)",
		description:
			"You have studied one of the Empire’s traditions of magic, of the Order of Fire. If you know an Arcane Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Arcane Lore (the Heavens)": MakeTalent({
		name: "Arcane Lore (the Heavens)",
		description:
			"You have studied one of the Empire’s traditions of magic, of the Order of the Heavens. If you know an Arcane Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Arcane Lore (Life)": MakeTalent({
		name: "Arcane Lore (Life)",
		description:
			"You have studied one of the Empire’s traditions of magic, of the Order of Life. If you know an Arcane Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Arcane Lore (Light)": MakeTalent({
		name: "Arcane Lore (Light)",
		description:
			"You have studied one of the Empire’s traditions of magic, of the Order of Light. If you know an Arcane Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Arcane Lore (Metal)": MakeTalent({
		name: "Arcane Lore (Metal)",
		description:
			"You have studied one of the Empire’s traditions of magic, of the Order of Metal. If you know an Arcane Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Arcane Lore (Shadow)": MakeTalent({
		name: "Arcane Lore (Shadow)",
		description:
			"You have studied one of the Empire’s traditions of magic, of the Order of Shadow. If you know an Arcane Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Armoured Casting": MakeTalent({
		name: "Armoured Casting",
		description:
			"Your prayers help you cast spells while wearing armour. Your Casting Roll penalty while wearing armour is reduced by 3 when you cast chaos and divine spells. Normally, you’d suffer a –3 penalty for wearing a mail shirt, for example, but with Armoured Casting this penalty would be reduced to 0.",
		statBonus: [],
		skillBonus: [],
	}),
	Artistic: MakeTalent({
		name: "Artistic",
		description:
			"You have true creative talent. You gain a +20% bonus on Trade (Artist) Tests and +10% on tests to Evaluate objects d’art.",
		statBonus: [],
		skillBonus: [
			{ skill: "Trade (Artist)", bonus: 20, condition: null },
			{
				skill: "Evaluate",
				bonus: 10,
				condition: "when it's an object d'art",
			},
		],
	}),
	Contortionist: MakeTalent({
		name: "Contortionist",
		description:
			"You can bend and manipulate your body in a myriad of unnatural ways. You gain a +10% bonus on relevant Performer Skill Tests and a +20% bonus on Agility Tests to escape from bonds, squeeze through narrow openings, and so on.",
		statBonus: [
			{
				stat: "Ag",
				bonus: 20,
				condition:
					"to escape from bonds, squeeze through narrow openings, etc.",
			},
		],
		skillBonus: performerSkills.map((skill) => ({
			skill: skill,
			bonus: 10,
			condition: "when contortionism is relevant",
		})),
	}),
	Coolheaded: MakeTalent({
		name: "Coolheaded",
		description:
			"You gain a permanent +5% bonus to your Will Power Characteristic. Modify your starting profile to reflect this bonus.",
		statBonus: [{ stat: "WP", bonus: 5, condition: null }],
		skillBonus: [],
	}),
	"Dark Lore (Chaos)": MakeTalent({
		name: "Dark Lore (Chaos)",
		description:
			"You have embraced one of the forbidden arts of sorcery, specialized in Chaos. If you know a Dark Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Dark Lore (Necromancy)": MakeTalent({
		name: "Dark Lore (Necromancy)",
		description:
			"You have embraced one of the forbidden arts of sorcery, specialized in Necromancy. If you know a Dark Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Dark Magic": MakeTalent({
		name: "Dark Magic",
		description:
			"You know how to manipulate Dhar (black magic) to fuel your spells. Using Dark Magic gives you more power, but is much more dangerous. When you cast a spell, you can opt to use the energy of Dhar to fuel it. When making a Casting Roll for a Dark Magic spell, you roll an extra d10 and drop the die with the lowest result. However, all dice count for the purposes of Tzeentch’s Curse. For example, a wizard with Magic 2 who casts a dark magic spell rolls 3d10 and uses the highest two dice for his Casting Roll. All three dice are used to determine Tzeentch’s Curse. If he rolled a 6, 6, and 6, the Casting Roll would be 12 (6+6), but the spell would trigger a Major Chaos Manifestation. You must use Dark Magic when casting a Dark Lore spell. See Chapter 7: Magic for more information on spellcasting.",
		statBonus: [],
		skillBonus: [],
	}),
	Dealmaker: MakeTalent({
		name: "Dealmaker",
		description:
			"You are a slick-talking businessman who knows how to close a deal. You gain a +10% bonus on Evaluate and Haggle Skill Tests.",
		statBonus: [],
		skillBonus: [
			{ skill: "Evaluate", bonus: 10, condition: null },
			{ skill: "Haggle", bonus: 10, condition: null },
		],
	}),
	Disarm: MakeTalent({
		name: "Disarm",
		description:
			"If you hit with a melee attack, you may attempt to disarm your opponent instead of inflicting damage. Make an Opposed Agility Test. If you win, your opponent is disarmed and the weapon drops to the ground. It can be picked up with the ready action. If your opponent wins, he retains his weapon. Natural weapons (teeth, claws, etc.) cannot be disarmed.",
		statBonus: [],
		skillBonus: [],
	}),
	"Divine Lore (Manann)": MakeTalent({
		name: "Divine Lore (Manann)",
		description:
			"Your dedication to the diety Manann is such that your prayers can produce magical effects. If you know a Divine Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Divine Lore (Morr)": MakeTalent({
		name: "Divine Lore (Morr)",
		description:
			"Your dedication to the diety Morr is such that your prayers can produce magical effects. If you know a Divine Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Divine Lore (Myrmidia)": MakeTalent({
		name: "Divine Lore (Myrmidia)",
		description:
			"Your dedication to the diety Myrmidia is such that your prayers can produce magical effects. If you know a Divine Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Divine Lore (Renald)": MakeTalent({
		name: "Divine Lore (Renald)",
		description:
			"Your dedication to the diety Renald is such that your prayers can produce magical effects. If you know a Divine Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Divine Lore (Sigmar)": MakeTalent({
		name: "Divine Lore (Sigmar)",
		description:
			"Your dedication to the diety Sigmar is such that your prayers can produce magical effects. If you know a Divine Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Divine Lore (Shallya)": MakeTalent({
		name: "Divine Lore (Shallya)",
		description:
			"Your dedication to the diety Shallya is such that your prayers can produce magical effects. If you know a Divine Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Divine Lore (Taal/Rhya)": MakeTalent({
		name: "Divine Lore (Taal/Rhya)",
		description:
			"Your dedication to the diety Taal/Rhya is such that your prayers can produce magical effects. If you know a Divine Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Divine Lore (Ulric)": MakeTalent({
		name: "Divine Lore (Ulric)",
		description:
			"Your dedication to the diety Ulric is such that your prayers can produce magical effects. If you know a Divine Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Divine Lore (Verena)": MakeTalent({
		name: "Divine Lore (Verena)",
		description:
			"Your dedication to the diety Verena is such that your prayers can produce magical effects. If you know a Divine Lore, you can attempt to cast any spell from that lore. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	Dwarfcraft: MakeTalent({
		name: "Dwarfcraft",
		description:
			"Members of your race are natural craftsmen. You gain a +10% bonus on tests with the following Trade skills: Armourer, Brewer, Gem Cutter, Gunsmith, Miner, Smith, Stoneworker, and Weaponsmith.",
		statBonus: [],
		skillBonus: [
			{ skill: "Trade (Armourer)", bonus: 10, condition: null },
			{ skill: "Trade (Brewer)", bonus: 10, condition: null },
			{ skill: "Trade (Gem Cutter)", bonus: 10, condition: null },
			{ skill: "Trade (Gunsmith)", bonus: 10, condition: null },
			{ skill: "Trade (Miner)", bonus: 10, condition: null },
			{ skill: "Trade (Smith)", bonus: 10, condition: null },
			{ skill: "Trade (Stoneworker)", bonus: 10, condition: null },
			{ skill: "Trade (Weaponsmith)", bonus: 10, condition: null },
		],
	}),
	Etiquette: MakeTalent({
		name: "Etiquette",
		description:
			"You are well versed in the social graces of the upper classes. You gain a +10% bonus on Charm and Gossip Skill Tests when dealing with the nobility. The bonus also applies in other situations in which knowing the proper etiquette is important (impersonating a noble with the Disguise skill, for instance).",
		statBonus: [],
		skillBonus: [
			{
				skill: "Charm",
				bonus: 10,
				condition: "interacting with nobles",
			},
			{
				skill: "Gossip",
				bonus: 10,
				condition: "interacting with nobles",
			},
			{
				skill: "Disguise",
				bonus: 10,
				condition: "impersonating a noble",
			},
		],
	}),
	"Excellent Vision": MakeTalent({
		name: "Excellent Vision",
		description:
			"Your eyes are keen. You gain a +10% bonus on Perception Skill Tests that involve sight, and on Lip Reading Skill Tests.",
		statBonus: [],
		skillBonus: [{ skill: "Lip Reading", bonus: 10, condition: null }],
	}),
	"Fast Hands": MakeTalent({
		name: "Fast Hands",
		description:
			"You are adept at touching melee opponents during spellcasting. You gain a +20% Weapon Skill bonus when casting touch spells.",
		statBonus: [{ stat: "WS", bonus: 20, condition: "casting touch spells" }],
		skillBonus: [],
	}),
	Fearless: MakeTalent({
		name: "Fearless",
		description:
			"You are either brave enough or crazy enough that that you know no fear. You are immune to fear and treat terror as fear. You are also immune to the effects of the Intimidate skill and the Unsettling talent. See Chapter 9: The Game Master for more information on fear and terror.",
		statBonus: [],
		skillBonus: [],
	}),
	"Flee!": MakeTalent({
		name: "Flee!",
		description:
			"When your life is on the line, you are capable of impressive bursts of speed. When running away from combat or another dire threat, you gain a +1 bonus to your Movement Characteristic for 1d10 rounds.",
		statBonus: [],
		skillBonus: [],
	}),
	"Fleet Footed": MakeTalent({
		name: "Fleet Footed",
		description:
			"You gain a permanent +1 bonus to your Movement Characteristic. Modify your starting profile to reflect this bonus.",
		statBonus: [{ stat: "MV", bonus: 1, condition: null }],
		skillBonus: [],
	}),
	Flier: MakeTalent({
		name: "Flier",
		description:
			"You can fly. For more information on flying, see Chapter 6: Combat, Damage, and Movement.",
		statBonus: [],
		skillBonus: [],
	}),
	"Focused Strike": MakeTalent({
		name: "Focused Strike",
		description:
			"You can make aimed strikes with exceptional accuracy. When you take the Aim action, your next melee attack gains a +20% Weapon Skill instead of the normal +10%.",
		statBonus: [
			{ stat: "WS", bonus: 10, condition: "when aiming a melee attack" },
		],
		skillBonus: [],
	}),
	Frenzy: MakeTalent({
		name: "Frenzy",
		description:
			"You can incite yourself into a frothing rage. You must spend 1 round psyching yourself up (howling, biting your shield, etc.). The next round you lose control and go berserk, gaining a +10% bonus to Strength and Will Power but a –10% penalty to Weapon Skill and Intelligence. You must attack the nearest enemy in melee combat, all attacks must be all out attacks, charge attacks, or swift attacks, and you may not flee or retreat. You remain in this frenzied state until the combat is over.",
		statBonus: [
			{ stat: "S", bonus: 10, condition: "in a frenzy" },
			{ stat: "WP", bonus: 10, condition: "in a frenzy" },
			{ stat: "WS", bonus: -10, condition: "in a frenzy" },
			{ stat: "Int", bonus: -10, condition: "in a frenzy" },
		],
		skillBonus: [],
	}),
	Frightening: MakeTalent({
		name: "Frightening",
		description:
			"You have a frightening appearance. You cause Fear, as detailed in Chapter 9: The Game Master.",
		statBonus: [],
		skillBonus: [],
	}),
	"Grail Virtue of Audacity": MakeTalent({
		name: "Grail Virtue of Audacity",
		description:
			"Whenever you are engaged in melee with one or more opponents, you increase your Toughness Bonus Characteristic by +4. The bonus applies to melee attacks made by opponents engaged with you. This bonus lasts until you successfully test Weapon Skill and inflict at least 1 Wound against any adjacent foe or if, at any time, you choose not to make a melee attack while so engaged. After the bonus is expended, you cannot use the Grail Virtue of Audacity for the duration of the encounter.",
		statBonus: [
			{
				stat: "TB",
				bonus: 4,
				condition:
					"when engaged in melee, but have not yet dealt a wound or chosen to not attack for a round",
			},
		],
		skillBonus: [],
	}),
	"Grail Virtue of Confidence": MakeTalent({
		name: "Grail Virtue of Confidence",
		description:
			"Whilst you are involved in a Challenge, all other opponents must succeed on Very Hard (–30%) Weapon Skill Tests to hit you. You take this penalty to any attacks you make against opponents other than the one you challenged, so long as that opponent still stands. Also, you gain a +10% bonus to you Toughness characteristic against any attack that hits you.",
		statBonus: [
			{
				stat: "TB",
				bonus: 1,
				condition: "against attacks that hit during a Challenge",
			},
		],
		skillBonus: [],
	}),
	"Grail Virtue of Discipline": MakeTalent({
		name: "Grail Virtue of Discipline",
		description:
			"When you make a Swift Attack whilst outnumbered at least 2 to 1, your Attacks characteristic increases by +1.",
		statBonus: [
			{
				stat: "A",
				bonus: 1,
				condition: "when making a swift attack and outnumbered at least 2 to 1",
			},
		],
		skillBonus: [],
	}),
	"Grail Virtue of Duty": MakeTalent({
		name: "Grail Virtue of Duty",
		description:
			"If you fight with those to whom you are pledged, they gain +1 bonus to their Attacks characteristics and +10% bonus to their Strength characteristics during the Battle. If any of those to whom you are pledged are absent, you take a –10% penalty to your Strength and Toughness characteristics.",
		statBonus: [
			{
				stat: "S",
				bonus: -10,
				condition: "when fighting without those to whom you are pledged",
			},
			{
				stat: "T",
				bonus: -10,
				condition: "when fighting without those to whom you are pledged",
			},
		],
		skillBonus: [],
	}),
	"Grail Virtue of Empathy": MakeTalent({
		name: "Grail Virtue of Empathy",
		description:
			"When you lead Bretonnian peasants, you make any Fear or Terror tests first. If you succeed, the peasants do not need to check. If you fail, the peasants must make their own tests, as normal. In addition, you may spend two Fortune Points when seeking the Gifts of the Lady in order to extend the Gift to the peasants under your command. You may command a number of peasants equal to your Will Power characteristic.",
		statBonus: [],
		skillBonus: [],
	}),
	"Grail Virtue of Heroism": MakeTalent({
		name: "Grail Virtue of Heroism",
		description:
			"If you inflict damage on an opponent, you do an additional number of Wounds equal to the opponent’s Armour Points on that location. That is, if the opponent’s Toughness Bonus and Armour are enough to reduce the damage you do to zero, you do no damage, but if you do any damage at all, armour has no effect.",
		statBonus: [],
		skillBonus: [],
	}),
	"Grail Virtue of the Ideal": MakeTalent({
		name: "Grail Virtue of the Ideal",
		description:
			"You gain a permanent +5% bonus to your Weapon Skill and Strength characteristics. Update your starting profile to reflect these changes.",
		statBonus: [
			{ stat: "WS", bonus: 5, condition: null },
			{ stat: "S", bonus: 5, condition: null },
		],
		skillBonus: [],
	}),
	"Grail Virtue of the Impetuous Knight": MakeTalent({
		name: "Grail Virtue of the Impetuous Knight",
		description:
			"You may take two Charge Attack actions in a single round. This over-rides the normal limit on only being able to take a single attack action in one round. The normal limits on Charge Attacks still apply.",
		statBonus: [],
		skillBonus: [],
	}),
	"Grail Virtue of the Joust": MakeTalent({
		name: "Grail Virtue of the Joust",
		description:
			"In your hands, all lances count as magic weapons and do SB+2 damage. They also lose the Tiring quality. If you wield a magical lance, its damage is increased by +1, and it loses the Tiring quality if it has it.",
		statBonus: [],
		skillBonus: [],
	}),
	"Grail Virtue of Knightly Temper": MakeTalent({
		name: "Grail Virtue of Knightly Temper",
		description:
			"When you make a Charge Attack, the attack at the end is a Swift Attack, rather than a Standard Attack. All attacks made in the Charge Attack benefit from the +10% bonus to Weapon Skill. The Virtue of Knightly Temper applies to all of these attacks.",
		statBonus: [],
		skillBonus: [],
	}),
	"Grail Virtue of Noble Disdain": MakeTalent({
		name: "Grail Virtue of Noble Disdain",
		description:
			"Double the Critical Value of any Critical Hit you score against an opponent who has used missile weapons against you or your allies.",
		statBonus: [],
		skillBonus: [],
	}),
	"Grail Virtue of the Penitent": MakeTalent({
		name: "Grail Virtue of the Penitent",
		description:
			"You may reverse the dice of a Critical Hit made against you. Thus, if your opponent, with a Critical Value of +5, rolls 58, giving a result of 8, a severe maiming, you may swap the dice to give 85, resulting in a 6, which is less serious.",
		statBonus: [],
		skillBonus: [],
	}),
	"Grail Virtue of Purity": MakeTalent({
		name: "Grail Virtue of Purity",
		description:
			"You do not need to spend Fortune Points to invoke the Gifts of the Lady and may do so automatically before every combat.",
		statBonus: [],
		skillBonus: [],
	}),
	"Grail Virtue of Stoicism": MakeTalent({
		name: "Grail Virtue of Stoicism",
		description:
			"You are immune to Fear and Terror and cannot be Intimidated. You gain +20% bonus to all Tests made to resist magic that affects your mind.",
		statBonus: [
			{
				stat: "WP",
				bonus: 20,
				condition: "when resisting magic that affects the mind",
			},
		],
		skillBonus: [],
	}),
	"Grudge-Born Fury": MakeTalent({
		name: "Grudge-Born Fury",
		description:
			"Your people have a long list of grudges against the various Goblinoid races. Their depredations fill you with such fury that you gain a +5% bonus to WS when attacking Orcs, Goblins, and Hobgoblins.",
		statBonus: [
			{
				stat: "WS",
				bonus: 5,
				condition: "attacking orcs, goblins or hobgoblins",
			},
		],
		skillBonus: [],
	}),
	Hardy: MakeTalent({
		name: "Hardy",
		description:
			"You gain a permanent +1 bonus to your Wounds Characteristic. Modify your starting profile to reflect this bonus.",
		statBonus: [{ stat: "W", bonus: 1, condition: null }],
		skillBonus: [],
	}),
	"Hedge Magic": MakeTalent({
		name: "Hedge Magic",
		description:
			"You are a self-taught spellcaster who has figured out how to work magic by trial and error. You can cast Petty Magic (Hedge) spells only without having the Speak Arcane Language skill; the Petty Magic (Hedge) talent is still required. You must roll an extra d10 when casting a spell. This does not add into your Casting Roll, but does count for the purposes of Tzeentch’s Curse. Once you learn an Arcane Language, you no longer have to roll the extra die.",
		statBonus: [],
		skillBonus: [],
	}),
	Hoverer: MakeTalent({
		name: "Hoverer",
		description:
			"You can fly low to the ground. For more information on flying, see Chapter 6: Combat, Damage, and Movement.",
		statBonus: [],
		skillBonus: [],
	}),
	Incantation: MakeTalent({
		name: "Incantation",
		description:
			"Your hymn singing and chanting helps to focus divine energies, aiding in magical rituals. You can assist a divine spellcaster perform ritual magic, and if you pass a Performer (Singer) Test and remain singing throughout the ritual, one spellcaster gains a +1 bonus to his Casting Roll. A number of people with this talent may assist in this manner equal to the number of spellcasters participating in the ritual.",
		statBonus: [],
		skillBonus: [],
	}),
	"Keen Senses": MakeTalent({
		name: "Keen Senses",
		description:
			"You have naturally acute senses. You gain a +20% bonus on Perception Tests.",
		statBonus: [],
		skillBonus: [{ skill: "Perception", bonus: 20, condition: null }],
	}),
	"Lesser Magic (Aethyric Armour)": MakeTalent({
		name: "Lesser Magic (Aethyric Armour)",
		description:
			"You know the common spell Aethyric Armour. See Chapter 7: Magic for more information on Lesser Magic and descriptions of the various spells. You must have a Petty Magic talent before you can learn a Lesser Magic talent.",
		statBonus: [],
		skillBonus: [],
	}),
	"Lesser Magic (Blessed Weapon)": MakeTalent({
		name: "Lesser Magic (Blessed Weapon)",
		description:
			"You know the common spell Blessed Weapon. See Chapter 7: Magic for more information on Lesser Magic and descriptions of the various spells. You must have a Petty Magic talent before you can learn a Lesser Magic talent.",
		statBonus: [],
		skillBonus: [],
	}),
	"Lesser Magic (Dispel)": MakeTalent({
		name: "Lesser Magic (Dispel)",
		description:
			"You know the common spell Dispel. See Chapter 7: Magic for more information on Lesser Magic and descriptions of the various spells. You must have a Petty Magic talent before you can learn a Lesser Magic talent.",
		statBonus: [],
		skillBonus: [],
	}),
	"Lesser Magic (Exorcism)": MakeTalent({
		name: "Lesser Magic (Exorcism)",
		description:
			"You know the common spell Exorcism. See Chapter 7: Magic for more information on Lesser Magic and descriptions of the various spells. You must have a Petty Magic talent before you can learn a Lesser Magic talent.",
		statBonus: [],
		skillBonus: [],
	}),
	"Lesser Magic (Magic Alarm)": MakeTalent({
		name: "Lesser Magic (Magic Alarm)",
		description:
			"You know the common spell Magic Alarm. See Chapter 7: Magic for more information on Lesser Magic and descriptions of the various spells. You must have a Petty Magic talent before you can learn a Lesser Magic talent.",
		statBonus: [],
		skillBonus: [],
	}),
	"Lesser Magic (Magic Lock)": MakeTalent({
		name: "Lesser Magic (Magic Lock)",
		description:
			"You know the common spell Magic Lock. See Chapter 7: Magic for more information on Lesser Magic and descriptions of the various spells. You must have a Petty Magic talent before you can learn a Lesser Magic talent.",
		statBonus: [],
		skillBonus: [],
	}),
	"Lesser Magic (Move)": MakeTalent({
		name: "Lesser Magic (Move)",
		description:
			"You know the common spell Move. See Chapter 7: Magic for more information on Lesser Magic and descriptions of the various spells. You must have a Petty Magic talent before you can learn a Lesser Magic talent.",
		statBonus: [],
		skillBonus: [],
	}),
	"Lesser Magic (Silence)": MakeTalent({
		name: "Lesser Magic (Silence)",
		description:
			"You know the common spell Silence. See Chapter 7: Magic for more information on Lesser Magic and descriptions of the various spells. You must have a Petty Magic talent before you can learn a Lesser Magic talent.",
		statBonus: [],
		skillBonus: [],
	}),
	"Lesser Magic (Skywalk)": MakeTalent({
		name: "Lesser Magic (Skywalk)",
		description:
			"You know the common spell Skywalk. See Chapter 7: Magic for more information on Lesser Magic and descriptions of the various spells. You must have a Petty Magic talent before you can learn a Lesser Magic talent.",
		statBonus: [],
		skillBonus: [],
	}),
	"Lightning Parry": MakeTalent({
		name: "Lightning Parry",
		description:
			"When you make a swift attack (see Chapter 6: Combat, Damage, and Movement), you can forego one of your attacks to gain a free parry. If you had Attacks 3, for example, you could make two attacks and gain one parry with your swift attack action. The limit of one parry per round remains in effect.",
		statBonus: [],
		skillBonus: [],
	}),
	"Lightning Reflexes": MakeTalent({
		name: "Lightning Reflexes",
		description:
			"You gain a permanent +5% bonus to your Agility Characteristic. Modify your starting profile to reflect this bonus.",
		statBonus: [{ stat: "Ag", bonus: 5, condition: null }],
		skillBonus: [],
	}),
	Linguistics: MakeTalent({
		name: "Linguistics",
		description:
			"You have a natural affinity for languages. You gain a +10% bonus on all Read/Write and Speak Language Skill Tests.",
		statBonus: [],
		skillBonus: [...languageSkills, <SkillName>"Read/Write"].map((skill) => ({
			skill: skill,
			bonus: 10,
			condition: null,
		})),
	}),
	Luck: MakeTalent({
		name: "Luck",
		description:
			"You were born lucky. At the most improbable times, things go your way. You gain an extra Fortune Point each day. See Chapter 6: Combat, Damage, and Movement for more information about Fortune Points.",
		statBonus: [],
		skillBonus: [],
	}),
	Marksman: MakeTalent({
		name: "Marksman",
		description:
			"You gain a permanent +5% bonus to your Ballistic Skill Characteristic. Modify your starting profile to reflect this bonus.",
		statBonus: [{ stat: "BS", bonus: 5, condition: null }],
		skillBonus: [],
	}),
	"Master Gunner": MakeTalent({
		name: "Master Gunner",
		description:
			"You reduce the reload time of all black powder weapons by a half action. If you also have Rapid Reload, you gain the benefits of both talents (thus reducing the reload time of black powder weapons by a full action).",
		statBonus: [],
		skillBonus: [],
	}),
	"Master Orator": MakeTalent({
		name: "Master Orator",
		description:
			"You are such an accomplished orator that you can fire up huge crowds. You can affect 100 times the normal number of people when using the Charm skill. You must have Public Speaking before you can gain this talent.",
		statBonus: [],
		skillBonus: [],
	}),
	"Master Rune (Adamant)": MakeTalent({
		name: "Master Rune (Adamant)",
		description:
			"You have learned the secret of the magical Master Rune of Adamant. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Master Rune (Alaric the Mad)": MakeTalent({
		name: "Master Rune (Alaric the Mad)",
		description:
			"You have learned the secret of the magical Master Rune of Alaric the Mad. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Master Rune (Balance)": MakeTalent({
		name: "Master Rune (Balance)",
		description:
			"You have learned the secret of the magical Master Rune of Balance. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Master Rune (Breaking)": MakeTalent({
		name: "Master Rune (Breaking)",
		description:
			"You have learned the secret of the magical Master Rune of Breaking. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Master Rune (Dismay)": MakeTalent({
		name: "Master Rune (Dismay)",
		description:
			"You have learned the secret of the magical Master Rune of Dismay. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Master Rune (Flight)": MakeTalent({
		name: "Master Rune (Flight)",
		description:
			"You have learned the secret of the magical Master Rune of Flight. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Master Rune (Gromril)": MakeTalent({
		name: "Master Rune (Gromril)",
		description:
			"You have learned the secret of the magical Master Rune of Gromril. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Master Rune (Kingship)": MakeTalent({
		name: "Master Rune (Kingship)",
		description:
			"You have learned the secret of the magical Master Rune of Kingship. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Master Rune (Skalf Blackhammer)": MakeTalent({
		name: "Master Rune (Skalf Blackhammer)",
		description:
			"You have learned the secret of the magical Master Rune of Skalf Blackhammer. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Master Rune (Snorri Spangelhelm)": MakeTalent({
		name: "Master Rune (Snorri Spangelhelm)",
		description:
			"You have learned the secret of the magical Master Rune of Snorri Spangelhelm. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Master Rune (Spellbinding)": MakeTalent({
		name: "Master Rune (Spellbinding)",
		description:
			"You have learned the secret of the magical Master Rune of Spellbinding. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Master Rune (Spite)": MakeTalent({
		name: "Master Rune (Spite)",
		description:
			"You have learned the secret of the magical Master Rune of Spite. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Master Rune (Steel)": MakeTalent({
		name: "Master Rune (Steel)",
		description:
			"You have learned the secret of the magical Master Rune of Steel. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Master Rune (Swiftness)": MakeTalent({
		name: "Master Rune (Swiftness)",
		description:
			"You have learned the secret of the magical Master Rune of Swiftness. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	Meditation: MakeTalent({
		name: "Meditation",
		description:
			"You can focus your mind and ignore the world around you. When performing ritual magic, you gain a bonus to your Casting Roll equal to your Magic Characteristic.",
		statBonus: [],
		skillBonus: [],
	}),
	Menacing: MakeTalent({
		name: "Menacing",
		description:
			"You have an imposing presence, due to size, demeanour, or appearance. You gain a +10% bonus on Intimidate and Torture Skill Tests.",
		statBonus: [],
		skillBonus: [
			{ skill: "Intimidate", bonus: 10, condition: null },
			{ skill: "Torture", bonus: 10, condition: null },
		],
	}),
	"Mighty Missile": MakeTalent({
		name: "Mighty Missile",
		description:
			"You know how to target magic missiles to inflict maximum damage. You gain a +1 bonus on damage rolls with magic missile spells.",
		statBonus: [],
		skillBonus: [],
	}),
	"Mighty Shot": MakeTalent({
		name: "Mighty Shot",
		description:
			"You know how to target missile attacks so they do extra damage. You gain a +1 bonus on damage rolls with missile weapons.",
		statBonus: [],
		skillBonus: [],
	}),
	Mimic: MakeTalent({
		name: "Mimic",
		description:
			"You have an ear for voices and accents and can reproduce them accurately. You gain a +10% bonus on Performer (Actor, Clown, Comedian, Jester and Storyteller) Skill Tests, Disguise Skill Tests if the disguise has a verbal component, and Speak Language Skill Test when trying to pass as a native.",
		statBonus: [],
		skillBonus: [
			{ skill: "Performer (Actor)", bonus: 10, condition: null },
			{ skill: "Performer (Clown)", bonus: 10, condition: null },
			{ skill: "Performer (Comedian)", bonus: 10, condition: null },
			{ skill: "Performer (Jester)", bonus: 10, condition: null },
			{ skill: "Performer (Storyteller)", bonus: 10, condition: null },
			{
				skill: "Disguise",
				bonus: 10,
				condition: "when disguising voice",
			},
			...languageSkills.map((skill) => ({
				skill: skill,
				bonus: 10,
				condition: "when passing for a native",
			})),
		],
	}),
	"Natural Weapons": MakeTalent({
		name: "Natural Weapons",
		description:
			"You have claws or vicious teeth that can rend apart your foes in combat. When attacking without a weapon, you count as being armed with a hand weapon. You cannot parry with your natural weapons. You cannot, for obvious reasons, be disarmed.",
		statBonus: [],
		skillBonus: [],
	}),
	"Night Vision": MakeTalent({
		name: "Night Vision",
		description:
			"You can see extremely well in natural darkness at distances up to 30 yards. This talent doesn’t work in total darkness, requiring illumination equivalent to starlight to function.",
		statBonus: [],
		skillBonus: [],
	}),
	Orientation: MakeTalent({
		name: "Orientation",
		description:
			"You have an instinctive feel for direction. You rarely get lost and always know the direction of north. You gain a +10% bonus on Navigation Skill Tests.",
		statBonus: [],
		skillBonus: [{ skill: "Navigation", bonus: 10, condition: null }],
	}),
	"Petty Magic (Arcane)": MakeTalent({
		name: "Petty Magic (Arcane)",
		description:
			"You know the most basic of arcane magical techniques. If you know a Petty Magic talent and you have a Magic Characteristic of at least 1, you can attempt to cast any spell from that talent. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Petty Magic (Divine)": MakeTalent({
		name: "Petty Magic (Divine)",
		description:
			"You know the most basic of divine magical techniques. If you know a Petty Magic talent and you have a Magic Characteristic of at least 1, you can attempt to cast any spell from that talent. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Petty Magic (Hag)": MakeTalent({
		name: "Petty Magic (Hag)",
		description:
			"You know the most basic of hag magical techniques. If you know a Petty Magic talent and you have a Magic Characteristic of at least 1, you can attempt to cast any spell from that talent. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Petty Magic (Hedge)": MakeTalent({
		name: "Petty Magic (Hedge)",
		description:
			"You know the most basic of hedge magical techniques. If you know a Petty Magic talent and you have a Magic Characteristic of at least 1, you can attempt to cast any spell from that talent. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Petty Magic (Ice)": MakeTalent({
		name: "Petty Magic (Ice)",
		description:
			"You know the most basic of ice magical techniques. If you know a Petty Magic talent and you have a Magic Characteristic of at least 1, you can attempt to cast any spell from that talent. See Chapter 7: Magic for spell lists and further details.",
		statBonus: [],
		skillBonus: [],
	}),
	"Public Speaking": MakeTalent({
		name: "Public Speaking",
		description:
			"You know how to work a crowd. You can affect 10 times the normal number of people when using the Charm skill.",
		statBonus: [],
		skillBonus: [],
	}),
	"Quick Draw": MakeTalent({
		name: "Quick Draw",
		description:
			"Your speedy reflexes allow you to quickly draw weapons and other items. Once per round, you can use the ready action as a free action.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rapid Reload": MakeTalent({
		name: "Rapid Reload",
		description:
			"You can reload ranged weapons with practiced ease. You reduce the reload times of all missile weapons by a half action. You could reload a crossbow in a half action, for example, whereas it is normally a full action. If the weapon already had a reload time of a half action, it becomes a free action. It takes you virtually no time to reload such weapons, which allows you to make swift attacks with them. See Chapter 6: Combat, Movement, and Damage for more information on swift attacks.",
		statBonus: [],
		skillBonus: [],
	}),
	"Resistance to Chaos": MakeTalent({
		name: "Resistance to Chaos",
		description:
			"You are naturally resistant to the power of Chaos. You gain a +10% bonus on Will Power Tests to resist magic and other Chaos effects, and you are immune to Chaos mutation. However, you can never become a spellcaster of any type.",
		statBonus: [
			{
				stat: "WP",
				bonus: 10,
				condition: "when resisting magic and other chaos effects",
			},
		],
		skillBonus: [],
	}),
	"Resistance to Disease": MakeTalent({
		name: "Resistance to Disease",
		description:
			"Your constitution allows you to shrug off many diseases. You gain a +10% bonus on Toughness Tests to resist disease.",
		statBonus: [{ stat: "T", bonus: 10, condition: "when resisting disease" }],
		skillBonus: [],
	}),
	"Resistance to Magic": MakeTalent({
		name: "Resistance to Magic",
		description:
			"You are naturally resistant to the effects of magic. You gain a +10% bonus on Will Power Tests to resist magic.",
		statBonus: [{ stat: "WP", bonus: 10, condition: "when resisting magic" }],
		skillBonus: [],
	}),
	"Resistance to Poison": MakeTalent({
		name: "Resistance to Poison",
		description:
			"Your hardiness allows you to ignore the effects of many poisons. You gain a +10% bonus on Toughness Tests to resist poison.",
		statBonus: [{ stat: "T", bonus: 10, condition: "when resisting poison" }],
		skillBonus: [],
	}),
	Rover: MakeTalent({
		name: "Rover",
		description:
			"You are at home in the wild. You gain a +10% bonus on Concealment and Silent Move Skill Tests when in rural locations.",
		statBonus: [],
		skillBonus: [
			{
				skill: "Concealment",
				bonus: 10,
				condition: "in rural locations",
			},
			{
				skill: "Silent Move",
				bonus: 10,
				condition: "in rural locations",
			},
		],
	}),
	"Rune (Cleaving)": MakeTalent({
		name: "Rune (Cleaving)",
		description:
			"You have learned the secret of the magical Rune of Cleaving. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rune (Fate)": MakeTalent({
		name: "Rune (Fate)",
		description:
			"You have learned the secret of the magical Rune of Fate. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rune (Fire)": MakeTalent({
		name: "Rune (Fire)",
		description:
			"You have learned the secret of the magical Rune of Fire. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rune (Fortitude)": MakeTalent({
		name: "Rune (Fortitude)",
		description:
			"You have learned the secret of the magical Rune of Fortitude. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rune (Furnace)": MakeTalent({
		name: "Rune (Furnace)",
		description:
			"You have learned the secret of the magical Rune of Furnace. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rune (Fury)": MakeTalent({
		name: "Rune (Fury)",
		description:
			"You have learned the secret of the magical Rune of Fury. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rune (Grudges)": MakeTalent({
		name: "Rune (Grudges)",
		description:
			"You have learned the secret of the magical Rune of Grudges. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rune (Iron)": MakeTalent({
		name: "Rune (Iron)",
		description:
			"You have learned the secret of the magical Rune of Iron. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rune (Luck)": MakeTalent({
		name: "Rune (Luck)",
		description:
			"You have learned the secret of the magical Rune of Luck. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rune (Might)": MakeTalent({
		name: "Rune (Might)",
		description:
			"You have learned the secret of the magical Rune of Might. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rune (Resistance)": MakeTalent({
		name: "Rune (Resistance)",
		description:
			"You have learned the secret of the magical Rune of Resistance. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rune (Shielding)": MakeTalent({
		name: "Rune (Shielding)",
		description:
			"You have learned the secret of the magical Rune of Shielding. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rune (Speed)": MakeTalent({
		name: "Rune (Speed)",
		description:
			"You have learned the secret of the magical Rune of Speed. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rune (Spellbreaking)": MakeTalent({
		name: "Rune (Spellbreaking)",
		description:
			"You have learned the secret of the magical Rune of Spellbreaking. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rune (Spelleating)": MakeTalent({
		name: "Rune (Spelleating)",
		description:
			"You have learned the secret of the magical Rune of Spelleating. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rune (Stone)": MakeTalent({
		name: "Rune (Stone)",
		description:
			"You have learned the secret of the magical Rune of Stone. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rune (Striking)": MakeTalent({
		name: "Rune (Striking)",
		description:
			"You have learned the secret of the magical Rune of Striking. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	"Rune (Warding)": MakeTalent({
		name: "Rune (Warding)",
		description:
			"You have learned the secret of the magical Rune of Warding. See Chapter 8: Rune Magic of Realms of Sorcery for information on using runes.",
		statBonus: [],
		skillBonus: [],
	}),
	Savvy: MakeTalent({
		name: "Savvy",
		description:
			"You gain a permanent +5% bonus to your Intelligence Characteristic. Modify your starting profile to reflect this bonus.",
		statBonus: [{ stat: "Int", bonus: 5, condition: null }],
		skillBonus: [],
	}),
	Schemer: MakeTalent({
		name: "Schemer",
		description:
			"You are a master of personal politics. You gain a +10% bonus on intrigue-related Charm Tests and on WP Tests to resist the Charm of others.",
		statBonus: [{ stat: "WP", bonus: 10, condition: "when resisting charm" }],
		skillBonus: [
			{ skill: "Charm", bonus: 10, condition: "when intrigue related" },
		],
	}),
	"Seasoned Traveller": MakeTalent({
		name: "Seasoned Traveller",
		description:
			"You have extensive travel experience. You gain a +10% bonus on Common Knowledge and Speak Language Skill Tests.",
		statBonus: [],
		skillBonus: [
			...commonKnowledgeSkills.map((skill) => ({
				skill: skill,
				bonus: 10,
				condition: null,
			})),
			...languageSkills.map((skill) => ({
				skill: skill,
				bonus: 10,
				condition: null,
			})),
		],
	}),
	Sharpshooter: MakeTalent({
		name: "Sharpshooter",
		description:
			"You can make aimed shots with exceptional accuracy. When you use the aim action, your next ranged attack gains a +20% Ballistic Skill bonus instead of the normal +10%.",
		statBonus: [
			{ stat: "WS", bonus: 10, condition: "when aiming a ranged attack" },
		],
		skillBonus: [],
	}),
	"Sixth Sense": MakeTalent({
		name: "Sixth Sense",
		description:
			"You get a strange feeling when you are in grave danger, and this sometimes alerts you to trouble before it happens. When danger is afoot, the GM may secretly roll a test on your Will Power. If successful, the GM may tell you that you have a bad feeling about your situation or that you feel like you’re being watched. This talent may enable to you to avoid being surprised when the rest of your allies succumb.",
		statBonus: [],
		skillBonus: [],
	}),
	"Specialist Weapon Group (Cavalry)": MakeTalent({
		name: "Specialist Weapon Group (Cavalry)",
		description:
			"You know how to use cavalry weapons. For details on the weapons included in this group, see Chapter 5: Equipment.",
		statBonus: [],
		skillBonus: [],
	}),
	"Specialist Weapon Group (Crossbow)": MakeTalent({
		name: "Specialist Weapon Group (Crossbow)",
		description:
			"You know how to use crossbow weapons. For details on the weapons included in this group, see Chapter 5: Equipment.",
		statBonus: [],
		skillBonus: [],
	}),
	"Specialist Weapon Group (Engineer)": MakeTalent({
		name: "Specialist Weapon Group (Engineer)",
		description:
			"You know how to use engineer weapons. For details on the weapons included in this group, see Chapter 5: Equipment.",
		statBonus: [],
		skillBonus: [],
	}),
	"Specialist Weapon Group (Entangling)": MakeTalent({
		name: "Specialist Weapon Group (Entangling)",
		description:
			"You know how to use entangling weapons. For details on the weapons included in this group, see Chapter 5: Equipment.",
		statBonus: [],
		skillBonus: [],
	}),
	"Specialist Weapon Group (Fencing)": MakeTalent({
		name: "Specialist Weapon Group (Fencing)",
		description:
			"You know how to use fencing weapons. For details on the weapons included in this group, see Chapter 5: Equipment.",
		statBonus: [],
		skillBonus: [],
	}),
	"Specialist Weapon Group (Flail)": MakeTalent({
		name: "Specialist Weapon Group (Flail)",
		description:
			"You know how to use flail weapons. For details on the weapons included in this group, see Chapter 5: Equipment.",
		statBonus: [],
		skillBonus: [],
	}),
	"Specialist Weapon Group (Gunpowder)": MakeTalent({
		name: "Specialist Weapon Group (Gunpowder)",
		description:
			"You know how to use gunpowder weapons. For details on the weapons included in this group, see Chapter 5: Equipment.",
		statBonus: [],
		skillBonus: [],
	}),
	"Specialist Weapon Group (Longbow)": MakeTalent({
		name: "Specialist Weapon Group (Longbow)",
		description:
			"You know how to use longbows. For details on the weapons included in this group, see Chapter 5: Equipment.",
		statBonus: [],
		skillBonus: [],
	}),
	"Specialist Weapon Group (Parrying)": MakeTalent({
		name: "Specialist Weapon Group (Parrying)",
		description:
			"You know how to use parrying weapons. For details on the weapons included in this group, see Chapter 5: Equipment.",
		statBonus: [],
		skillBonus: [],
	}),
	"Specialist Weapon Group (Scythe)": MakeTalent({
		name: "Specialist Weapon Group (Scythe)",
		description:
			"You know how to use scythes. For details on the weapons included in this group, see Chapter 5: Equipment.",
		statBonus: [],
		skillBonus: [],
	}),
	"Specialist Weapon Group (Sling)": MakeTalent({
		name: "Specialist Weapon Group (Sling)",
		description:
			"You know how to use slings. For details on the weapons included in this group, see Chapter 5: Equipment.",
		statBonus: [],
		skillBonus: [],
	}),
	"Specialist Weapon Group (Throwing)": MakeTalent({
		name: "Specialist Weapon Group (Throwing)",
		description:
			"You know how to use throwing weapons. For details on the weapons included in this group, see Chapter 5: Equipment.",
		statBonus: [],
		skillBonus: [],
	}),
	"Specialist Weapon Group (Two-handed)": MakeTalent({
		name: "Specialist Weapon Group (Two-handed)",
		description:
			"You know how to use two-handed weapons. For details on the weapons included in this group, see Chapter 5: Equipment.",
		statBonus: [],
		skillBonus: [],
	}),
	"Stout-Hearted": MakeTalent({
		name: "Stout-Hearted",
		description:
			"You are exceptionally brave. You gain a +10% bonus on Fear and Terror Tests, and on Will Power Tests to resist Intimidate attempts.",
		statBonus: [
			{
				stat: "WP",
				bonus: 10,
				condition: "when resisting intimidation",
			},
		],
		skillBonus: [],
	}),
	"Street Fighting": MakeTalent({
		name: "Street Fighting",
		description:
			"You learned how to brawl in the gutters. You can make unarmed attacks with a +10% bonus to Weapon Skill. Furthermore, you gain a +1 bonus on damage rolls with unarmed attacks.",
		statBonus: [{ stat: "WS", bonus: 10, condition: "when unarmed" }],
		skillBonus: [],
	}),
	Streetwise: MakeTalent({
		name: "Streetwise",
		description:
			"You know how to get by on the street. You gain a +10% bonus on Charm and Gossip Skill Tests when dealing with the criminal underworld.",
		statBonus: [],
		skillBonus: [
			{
				skill: "Charm",
				bonus: 10,
				condition: "when dealing with criminal underworld",
			},
			{
				skill: "Gossip",
				bonus: 10,
				condition: "when dealing with criminal underworld",
			},
		],
	}),
	"Strike Mighty Blow": MakeTalent({
		name: "Strike Mighty Blow",
		description:
			"You know how to target melee attacks so they do extra damage. You gain a +1 bonus on damage rolls with melee weapons.",
		statBonus: [],
		skillBonus: [],
	}),
	"Strike to Injure": MakeTalent({
		name: "Strike to Injure",
		description:
			"You’re an expert at targeting your enemies’ most vulnerable areas. The Critical Value of any Critical Hits you inflict is increased by 1.",
		statBonus: [],
		skillBonus: [],
	}),
	"Strike to Stun": MakeTalent({
		name: "Strike to Stun",
		description:
			"If you hit with a melee attack, you may attempt to stun your opponent instead of inflicting damage. First, you must make a Strength Test. If that is successful, your opponent must make a Toughness Test, with a +10% bonus for each AP on his head. If he fails, your opponent is stunned for 1d10 rounds. Stunned characters cannot take any actions and cannot dodge.",
		statBonus: [],
		skillBonus: [],
	}),
	"Strong-Minded": MakeTalent({
		name: "Strong-Minded",
		description:
			"Your resilient mind is less susceptible to sanity-blasting events. You don’t have to check for insanity until you have 8 Insanity Points.",
		statBonus: [],
		skillBonus: [],
	}),
	Sturdy: MakeTalent({
		name: "Sturdy",
		description:
			"You have a brawny physique. You do not suffer any Movement penalties while wearing heavy/plate armour. If you are using Encumbrance values with a character who has the sturdy talent ignore the Encumbrance values of the armour worn, though the –10% Agility modifier still applies. See Chapter 5: Equipment for more information about armour.",
		statBonus: [],
		skillBonus: [],
	}),
	Suave: MakeTalent({
		name: "Suave",
		description:
			"You gain a permanent +5% bonus to your Fellowship Characteristic. Modify your starting profile to reflect this bonus.",
		statBonus: [{ stat: "Fel", bonus: 5, condition: null }],
		skillBonus: [],
	}),
	"Sure Shot": MakeTalent({
		name: "Sure Shot",
		description:
			"You know how to find the weak spots in your enemies’ armour. When you hit with a ranged attack, you can ignore 1 Armour Point. If your target has no armour, this talent has no effect.",
		statBonus: [],
		skillBonus: [],
	}),
	Surgery: MakeTalent({
		name: "Surgery",
		description:
			"You know the most advanced scientific healing techniques. You gain a +10% on Heal Skill Tests. If you are treating a heavily wounded patient, a successful test heals 2 Wounds instead of the normal 1. If this character is in danger of losing a limb from a Critical Hit (see Chapter 6: Combat, Damage, and Movement), you also provide the patient with a +20% Toughness bonus on the test to resist limb loss.",
		statBonus: [],
		skillBonus: [{ skill: "Heal", bonus: 10, condition: null }],
	}),
	"Super Numerate": MakeTalent({
		name: "Super Numerate",
		description:
			"You have a gift for calculation and can work out a solution for nearly any mathematical problem given time. You gain a +10% bonus on Gamble and Navigation Skill Tests, and a +20% bonus on Perception Skill Tests that involve estimation.",
		statBonus: [],
		skillBonus: [
			{ skill: "Gamble", bonus: 10, condition: null },
			{ skill: "Navigation", bonus: 10, condition: null },
			{ skill: "Perception", bonus: 20, condition: "when estimating" },
		],
	}),
	Swashbuckler: MakeTalent({
		name: "Swashbuckler",
		description:
			"You are an agile combatant. You can use the Jump/Leap action as a half action and you increase the distance of all leaps by 1 yard.",
		statBonus: [],
		skillBonus: [],
	}),
	Terrifying: MakeTalent({
		name: "Terrifying",
		description:
			"One look at your monstrous countenance sends enemies running. You cause terror, as detailed in Chapter 9: The Game Master.",
		statBonus: [],
		skillBonus: [],
	}),
	Trapfinder: MakeTalent({
		name: "Trapfinder",
		description:
			"You are an expert at dealing with traps. You gain a +10% bonus to Perception and Pick Lock Tests that deal with locating and disarming traps.",
		statBonus: [],
		skillBonus: [
			{
				skill: "Perception",
				bonus: 10,
				condition: "when locating traps",
			},
			{
				skill: "Pick Lock",
				bonus: 10,
				condition: "when disarming traps",
			},
		],
	}),
	"Trick Riding": MakeTalent({
		name: "Trick Riding",
		description:
			"You are capable of amazing feats on horseback. You can do handstands on a galloping mount, leap from horseto horse, and the like. You only need to take Ride Skill Tests under the most extreme circumstances, and even then you gain a +10% bonus.",
		statBonus: [],
		skillBonus: [{ skill: "Ride", bonus: 10, condition: null }],
	}),
	"Tunnel Rat": MakeTalent({
		name: "Tunnel Rat",
		description:
			"You are at home beneath the earth. You gain a +10% bonus on Concealment and Silent Move Skill Tests when in underground locations.",
		statBonus: [],
		skillBonus: [
			{
				skill: "Concealment",
				bonus: 10,
				condition: "when underground",
			},
			{
				skill: "Silent Move",
				bonus: 10,
				condition: "when underground",
			},
		],
	}),
	Undead: MakeTalent({
		name: "Undead",
		description:
			"You are a creature of undeath, hideously reanimated by necromantic magic (see Chapter 7: Magic). You are immune to Fear, Terror, stunning, poison, disease, and all spells, skills, and effects that involve the manipulation of emotions and the mind.",
		statBonus: [],
		skillBonus: [],
	}),
	Unsettling: MakeTalent({
		name: "Unsettling",
		description:
			"Your daunting presence disturbs your opponents. Enemies must make a successful Will Power Test on seeing you or suffer a –10% penalty to their Weapon Skill and Ballistic Skill. They may test to overcome the effects this talent each round until they either make it or are out of sight of you.",
		statBonus: [],
		skillBonus: [],
	}),
	"Very Resilient": MakeTalent({
		name: "Very Resilient",
		description:
			"You gain a permanent +5% bonus to your Toughness Characteristic. Modify your starting profile to reflect this bonus.",
		statBonus: [{ stat: "T", bonus: 5, condition: null }],
		skillBonus: [],
	}),
	"Very Strong": MakeTalent({
		name: "Very Strong",
		description:
			"You gain a permanent +5% bonus to your Strength Characteristic. Modify your starting profile to reflect this bonus.",
		statBonus: [{ stat: "S", bonus: 5, condition: null }],
		skillBonus: [],
	}),
	"Virtue of Chivalry": MakeTalent({
		name: "Virtue of Chivalry",
		description:
			"You may call upon the Lady of the Lake and gain her blessings, as described in The Gifts of the Lady on page 39 of Knights of the Grail. Only Bretonnian knights may take this talent, which is only useful to characters with Fortune Points.",
		statBonus: [],
		skillBonus: [],
	}),
	"Virtue of Audacity": MakeTalent({
		name: "Virtue of Audacity",
		description:
			"If an opponent’s Strength Bonus is higher than yours, use its value in place of your own for the purpose of dealing Damage.",
		statBonus: [],
		skillBonus: [],
	}),
	"Virtue of Confidence": MakeTalent({
		name: "Virtue of Confidence",
		description:
			"Whilst engaged in combat, you may take a Full Action to issue a Challenge to a single opponent. Most targets of the Challenge are not obligated to accept the Challenge (though many do); Knights with the Virtue of Chivalry Talent must accept. For the duration of the combat, you gain a +1 bonus on damage rolls in melee combat. Whilst engaged in a Challenge, you may not Challenge a new opponent in that combat until the first is defeated or has fled the battle.",
		statBonus: [],
		skillBonus: [],
	}),
	"Virtue of Discipline": MakeTalent({
		name: "Virtue of Discipline",
		description:
			"It is no easier to attack you when you are outnumbered. With this Talent, you negate any bonuses to your opponents’ Weapon Skill that are gained as a result of superior numbers. (Ordinarily, multiple attackers against the same target reduce the difficulty of the attack, as described on Table 6–2: Combat Difficulty in WFRP.) This Talent does not negate any other circumstantial bonuses.",
		statBonus: [],
		skillBonus: [],
	}),
	"Virtue of Duty": MakeTalent({
		name: "Virtue of Duty",
		description:
			"You may pledge loyalty to up to three other characters. When you fight alongside those characters, they each gain a +5% bonus to their Weapon Skill characteristics. If any of them are not present in a battle, you take a –10% penalty to your Weapon Skill characteristic.",
		statBonus: [
			{
				stat: "WS",
				bonus: -10,
				condition: "when fighting away from those you are pledged to",
			},
		],
		skillBonus: [],
	}),
	"Virtue of Empathy": MakeTalent({
		name: "Virtue of Empathy",
		description:
			"You gain +10% bonus to Fellowship Tests when dealing with Bretonnian peasants. Other knights do not think less of you for talking with your social inferiors. (They may think less of you for choosing this path in the first place, however.)",
		statBonus: [
			{
				stat: "Fel",
				bonus: 10,
				condition: "when talking to Bretonnian peasants",
			},
		],
		skillBonus: [],
	}),
	"Virtue of Heroism": MakeTalent({
		name: "Virtue of Heroism",
		description:
			"You excel at hand-to-hand combat and your hits can prove deadly. Whenever you roll an unmodified 10 on your damage die, you may choose to forgo the additional damage to automatically inflict a Critical Hit instead, even if the target has not been reduced to 0 Wounds. The Critical Value is equal to your Strength Bonus. When using the Virtue of Heroism in conjunction with an Impact Weapon, the Impact Quality does not apply as normal, but rather increases the Critical Value by +1. You may not use Virtue of Heroism when wielding a magic weapon or a ranged weapon.",
		statBonus: [],
		skillBonus: [],
	}),
	"Virtue of the Ideal": MakeTalent({
		name: "Virtue of the Ideal",
		description:
			"You gain a +1 bonus to your Attacks characteristic when outnumbered in melee combat.",
		statBonus: [{ stat: "A", bonus: 1, condition: "when outnumbers in melee" }],
		skillBonus: [],
	}),
	"Virtue of the Impetuous Knight": MakeTalent({
		name: "Virtue of the Impetuous Knight",
		description:
			"Charge Attack is only a half action for you. In addition to the normal +10% Weapon Skill bonus of this action, you also gain a +1 bonus on the damage roll of your attack. All normal conditions on a Charge Attack apply.",
		statBonus: [],
		skillBonus: [],
	}),
	"Virtue of the Joust": MakeTalent({
		name: "Virtue of the Joust",
		description: "You gain +10% to WS when using a lance.",
		statBonus: [{ stat: "WS", bonus: 10, condition: "when using a lance" }],
		skillBonus: [],
	}),
	"Virtue of Knightly Temper": MakeTalent({
		name: "Virtue of Knightly Temper",
		description:
			"If you successfully wound an opponent at the end of a Charge Attack, you may immediately make another free attack against the same opponent. This attack costs no actions but is otherwise the same as a Standard Attack. You are not required to make this attack (for example, if the opponent is already dead). The +10% bonus to Weapon Skill bonus from the Charge does not apply to this additional attack.",
		statBonus: [],
		skillBonus: [],
	}),
	"Virtue of Noble Disdain": MakeTalent({
		name: "Virtue of Noble Disdain",
		description:
			"You gain a +10% bonus to your Weapon Skill when fighting characters who have used a missile weapon against you or your allies. You take a permanent –10% penalty to your Ballistic Skill characteristic due to your loathing for such cowardly means. Modify your starting profile to reflect this penalty.",
		statBonus: [
			{
				stat: "WS",
				bonus: 10,
				condition: "opponent used missile weapon against you or allies",
			},
			{ stat: "BS", bonus: -10, condition: null },
		],
		skillBonus: [],
	}),
	"Virtue of the Penitent": MakeTalent({
		name: "Virtue of the Penitent",
		description:
			"You may not use magic items or ride steeds other than a horse. Any weapon you wield counts as magical, and the Critical Value of any Critical Hit made against you is reduced by one. A Critical Hit with a value of 0 has no effect.",
		statBonus: [],
		skillBonus: [],
	}),
	"Virtue of Purity": MakeTalent({
		name: "Virtue of Purity",
		description:
			"You may invoke the Gifts of the Lady without taking time to pray. In addition, you gain one bonus Fortune Point every day.",
		statBonus: [],
		skillBonus: [],
	}),
	"Virtue of Stoicism": MakeTalent({
		name: "Virtue of Stoicism",
		description:
			"You may re-roll any failed Fear or Terror Test, or any failed Test to resist Intimidation. If the re-roll succeeds, ignore the first failure.",
		statBonus: [],
		skillBonus: [],
	}),
	"Virtue of the Quest": MakeTalent({
		name: "Virtue of the Quest",
		description:
			"You take a –50% penalty to your Weapon Skill characteristic if you use a lance. Questing Knights renounce the use of that weapon, and those with the Virtue of the Quest find it hard to break that pledge.\n\nYou receive visions that direct your quest. These visions lead you to the places where you should be, which normally means that they lead you into danger.\n\nAt any time, you may call upon your strength of purpose to give you succour. As a half action, you may spend a Fortune Point to heal 1d10 of your own Wounds. This cannot take you above your normal maximum.\n\nThis Talent has a number of effects, but they only apply whilst the character is in the career of the Questing Knight. If he completes the career and moves on or abandons it to take up a different basic career, the effects of the Talent lapse. If the character completes the career and becomes a Grail Knight, the Talent is lost altogether, though the experience points spent to buy it are not regained. If he simply abandoned the career, he retains the Talent, and if he re-enters the Questing Knight career its effects apply once more.",
		statBonus: [
			{
				stat: "WS",
				bonus: -50,
				condition: "when using a lance, while still questing",
			},
		],
		skillBonus: [],
	}),
	"Warrior Born": MakeTalent({
		name: "Warrior Born",
		description:
			"You gain a permanent +5% bonus to your Weapon Skill Characteristic. Modify your starting profile to reflect this bonus.",
		statBonus: [{ stat: "WS", bonus: 5, condition: null }],
		skillBonus: [],
	}),
	Witchcraft: MakeTalent({
		name: "Witchcraft",
		description:
			"You have managed to survive the perils of hedge wizardry and teach yourself more powerful techniques of magic use. This gives you access to spells beyond Petty Magic but since you must figure out each spell on your own, your progress is slower than that of a Magister. Witchcraft allows you to learn any spell from an Arcane Lore with a Casting Number of 15 or less, but you must pay 200 xp for each one. You can cast these spells without having the Speak Arcane Language skill. However, you must roll an extra d10 when casting one of these spells. This does not add into your Casting Roll but does count for the purposes of Tzeentch’s Curse. Once you learn an Arcane Language and an Arcane Lore, you no longer have to roll the extra die.",
		statBonus: [],
		skillBonus: [],
	}),
	"Witch Lore (Hag)": MakeTalent({
		name: "Witch Lore (Hag)",
		description:
			"You have studied one of the established witching traditions of the Old World. Such is the study and focus required, you can only ever know one Witch Lore Talent and can never also know an Arcane Lore, Dark Lore, or Divine Lore. If you know a Witch Lore, you may cast spells from that lore according to the rules presented in Chapter IX: Magic and Miracles.",
		statBonus: [],
		skillBonus: [],
	}),
	"Witch Lore (Hedge)": MakeTalent({
		name: "Witch Lore (Hedge)",
		description:
			"You have studied one of the established witching traditions of the Old World. Such is the study and focus required, you can only ever know one Witch Lore Talent and can never also know an Arcane Lore, Dark Lore, or Divine Lore. If you know a Witch Lore, you may cast spells from that lore according to the rules presented in Chapter IX: Magic and Miracles.",
		statBonus: [],
		skillBonus: [],
	}),
	"Witch Lore (Ice)": MakeTalent({
		name: "Witch Lore (Ice)",
		description:
			"You have studied one of the established witching traditions of the Old World. Such is the study and focus required, you can only ever know one Witch Lore Talent and can never also know an Arcane Lore, Dark Lore, or Divine Lore. If you know a Witch Lore, you may cast spells from that lore according to the rules presented in Chapter IX: Magic and Miracles.",
		statBonus: [],
		skillBonus: [],
	}),
	Wrestling: MakeTalent({
		name: "Wrestling",
		description:
			"You are an expert grappler. You can make unarmed attacks with a +10% bonus to Weapon Skill when attempting to grapple. Furthermore, you gain a +10% bonus on grappling Strength Tests.",
		statBonus: [
			{
				stat: "WS",
				bonus: 10,
				condition: "when doing an unarmed grapple",
			},
			{ stat: "S", bonus: 10, condition: "when grappling" },
		],
		skillBonus: [],
	}),
};

export type TalentName = keyof typeof talents;

export const arcaneLoreTalents: TalentName[] = [
	"Arcane Lore (Beasts)",
	"Arcane Lore (Death)",
	"Arcane Lore (Fire)",
	"Arcane Lore (Life)",
	"Arcane Lore (Light)",
	"Arcane Lore (Metal)",
	"Arcane Lore (Shadow)",
	"Arcane Lore (the Heavens)",
];

export const darkLoreTalents: TalentName[] = [
	"Dark Lore (Chaos)",
	"Dark Lore (Necromancy)",
];

export const divineLoreTalents: TalentName[] = [
	"Divine Lore (Manann)",
	"Divine Lore (Morr)",
	"Divine Lore (Myrmidia)",
	"Divine Lore (Renald)",
	"Divine Lore (Shallya)",
	"Divine Lore (Sigmar)",
	"Divine Lore (Taal/Rhya)",
	"Divine Lore (Ulric)",
	"Divine Lore (Verena)",
];

export const grailVirtueTalents: TalentName[] = [
	"Grail Virtue of Audacity",
	"Grail Virtue of Confidence",
	"Grail Virtue of Discipline",
	"Grail Virtue of Duty",
	"Grail Virtue of Empathy",
	"Grail Virtue of Heroism",
	"Grail Virtue of Knightly Temper",
	"Grail Virtue of Noble Disdain",
	"Grail Virtue of Purity",
	"Grail Virtue of Stoicism",
	"Grail Virtue of the Ideal",
	"Grail Virtue of the Impetuous Knight",
	"Grail Virtue of the Joust",
	"Grail Virtue of the Penitent",
];

export const lesserMagicTalents: TalentName[] = [
	"Lesser Magic (Aethyric Armour)",
	"Lesser Magic (Blessed Weapon)",
	"Lesser Magic (Dispel)",
	"Lesser Magic (Exorcism)",
	"Lesser Magic (Magic Alarm)",
	"Lesser Magic (Magic Lock)",
	"Lesser Magic (Move)",
	"Lesser Magic (Silence)",
	"Lesser Magic (Skywalk)",
];

export const masterRuneTalents: TalentName[] = [
	"Master Rune (Adamant)",
	"Master Rune (Alaric the Mad)",
	"Master Rune (Balance)",
	"Master Rune (Breaking)",
	"Master Rune (Dismay)",
	"Master Rune (Flight)",
	"Master Rune (Gromril)",
	"Master Rune (Kingship)",
	"Master Rune (Skalf Blackhammer)",
	"Master Rune (Snorri Spangelhelm)",
	"Master Rune (Spellbinding)",
	"Master Rune (Spite)",
	"Master Rune (Steel)",
	"Master Rune (Swiftness)",
];

export const runeTalents: TalentName[] = [
	"Rune (Cleaving)",
	"Rune (Fate)",
	"Rune (Fire)",
	"Rune (Fortitude)",
	"Rune (Furnace)",
	"Rune (Fury)",
	"Rune (Grudges)",
	"Rune (Iron)",
	"Rune (Luck)",
	"Rune (Might)",
	"Rune (Resistance)",
	"Rune (Shielding)",
	"Rune (Speed)",
	"Rune (Spellbreaking)",
	"Rune (Spelleating)",
	"Rune (Stone)",
	"Rune (Striking)",
	"Rune (Warding)",
];

export const specialistWeaponGroupTalents: TalentName[] = [
	"Specialist Weapon Group (Cavalry)",
	"Specialist Weapon Group (Crossbow)",
	"Specialist Weapon Group (Engineer)",
	"Specialist Weapon Group (Entangling)",
	"Specialist Weapon Group (Fencing)",
	"Specialist Weapon Group (Flail)",
	"Specialist Weapon Group (Gunpowder)",
	"Specialist Weapon Group (Longbow)",
	"Specialist Weapon Group (Parrying)",
	"Specialist Weapon Group (Sling)",
	"Specialist Weapon Group (Throwing)",
	"Specialist Weapon Group (Two-handed)",
];

export const virtueOfKnighthoodTalents: TalentName[] = [
	"Virtue of Audacity",
	"Virtue of Chivalry",
	"Virtue of Confidence",
	"Virtue of Discipline",
	"Virtue of Duty",
	"Virtue of Empathy",
	"Virtue of Heroism",
	"Virtue of Knightly Temper",
	"Virtue of Noble Disdain",
	"Virtue of Purity",
	"Virtue of Stoicism",
	"Virtue of the Ideal",
	"Virtue of the Impetuous Knight",
	"Virtue of the Joust",
	"Virtue of the Penitent",
	"Virtue of the Quest",
];
