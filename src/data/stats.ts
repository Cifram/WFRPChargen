const PrimaryStatList = {
	WS: true,
	BS: true,
	S: true,
	T: true,
	Ag: true,
	Int: true,
	WP: true,
	Fel: true,
};
export type PrimaryStat = keyof typeof PrimaryStatList;
export const PrimaryStatNames = Object.keys(PrimaryStatList) as PrimaryStat[];
export const SecondaryStatList = {
	A: true,
	W: true,
	SB: true,
	TB: true,
	MV: true,
	Mag: true,
	IP: true,
	FP: true,
};
export type SecondaryStat = keyof typeof SecondaryStatList;
export const SecondaryStatNames = Object.keys(
	SecondaryStatList
) as SecondaryStat[];
export type Stat = PrimaryStat | SecondaryStat;

export type PrimaryStatBlock = { [K in PrimaryStat]: number };
export type SecondaryStatBlock = { [K in SecondaryStat]: number };
export type StatBlock = PrimaryStatBlock & SecondaryStatBlock;
