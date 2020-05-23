export var PrimaryStatNames = { "WS": true, "BS": true, "S": true, "T": true, "AG": true, "INT": true, "WP": true, "FEL": true, };
export type PrimaryStat = keyof typeof PrimaryStatNames;
export var SecondaryStatNames = { "A": true, "W": true, "SB": true, "TB": true, "MV": true, "MAG": true, "IP": true, "FP": true, };
export type SecondaryStat = keyof typeof SecondaryStatNames;
export type Stat = PrimaryStat | SecondaryStat;

export type PrimaryStatBlock = { [K in PrimaryStat]: number };
export type SecondaryStatBlock = { [K in SecondaryStat]: number };
export type StatBlock = PrimaryStatBlock & SecondaryStatBlock;