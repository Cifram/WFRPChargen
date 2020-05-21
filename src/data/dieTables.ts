import { D10Value, D100Value } from '../dice';

export type D10Table = { [K in D10Value]: number };
export type D100Table = { [K in D100Value]: number };