export type PrimaryStat = "WS" | "BS" | "S" | "T" | "AG" | "INT" | "WP" | "FEL";
export type SecondaryStat = "A" | "W" | "SB" | "TB" | "MV" | "MAG" | "IP" | "FP";
export type Stat = PrimaryStat | SecondaryStat;

export type PrimaryStatBlock = { [K in PrimaryStat]: number };
export type SecondaryStatBlock = { [K in SecondaryStat]: number };
export type StatBlock = PrimaryStatBlock & SecondaryStatBlock;