export const PrimaryStatList = {
	WS: "Weapon Skill",
	BS: "Ballistic Skill",
	S: "Strength",
	T: "Toughness",
	Ag: "Agility",
	Int: "Intelligence",
	WP: "Will Power",
	Fel: "Fellowship",
};
export type PrimaryStat = keyof typeof PrimaryStatList;
export const PrimaryStatNames = Object.keys(PrimaryStatList) as PrimaryStat[];
export const SecondaryStatList = {
	A: "Attacks",
	W: "Wounds",
	SB: "Strength Bonus",
	TB: "Toughness Bonus",
	MV: "Move",
	Mag: "Magic",
	IP: "Insanity Points",
	FP: "Fate Points",
};
export type SecondaryStat = keyof typeof SecondaryStatList;
export const SecondaryStatNames = Object.keys(
	SecondaryStatList
) as SecondaryStat[];
export type Stat = PrimaryStat | SecondaryStat;

export type PrimaryStatBlock = { [K in PrimaryStat]: number };
export type SecondaryStatBlock = { [K in SecondaryStat]: number };
export type StatBlock = PrimaryStatBlock & SecondaryStatBlock;
export const StatFullNames = Object.assign(
	{},
	PrimaryStatList,
	SecondaryStatList
);
