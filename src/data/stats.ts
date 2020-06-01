export var PrimaryStatNames = {
	WS: true,
	BS: true,
	S: true,
	T: true,
	Ag: true,
	Int: true,
	WP: true,
	Fel: true,
};
export type PrimaryStat = keyof typeof PrimaryStatNames;
export var SecondaryStatNames = {
	A: true,
	W: true,
	SB: true,
	TB: true,
	MV: true,
	Mag: true,
	IP: true,
	FP: true,
};
export type SecondaryStat = keyof typeof SecondaryStatNames;
export type Stat = PrimaryStat | SecondaryStat;

export type PrimaryStatBlock = { [K in PrimaryStat]: number };
export type SecondaryStatBlock = { [K in SecondaryStat]: number };
export type StatBlock = PrimaryStatBlock & SecondaryStatBlock;
