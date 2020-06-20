import * as React from "react";
import { Character, calcStatBlock } from "../../store/state/character";

export function StatsSection(props: { char: Character }) {
	let stats = calcStatBlock(props.char);
	return (
		<div className="flexcol block">
			<div className="header">CHARACTER PROFILE</div>
			<div className="flexrow cell">
				<div className="subcell centered">WS</div>
				<div className="subcell centered">BS</div>
				<div className="subcell centered">S</div>
				<div className="subcell centered">T</div>
				<div className="subcell centered">Ag</div>
				<div className="subcell centered">Int</div>
				<div className="subcell centered">WP</div>
				<div className="subcell centered">Fel</div>
			</div>
			<div className="flexrow">
				<div className="cell centered">{stats.WS}</div>
				<div className="cell centered">{stats.BS}</div>
				<div className="cell centered">{stats.S}</div>
				<div className="cell centered">{stats.T}</div>
				<div className="cell centered">{stats.Ag}</div>
				<div className="cell centered">{stats.Int}</div>
				<div className="cell centered">{stats.WP}</div>
				<div className="cell centered">{stats.Fel}</div>
			</div>
			<div className="flexrow cell">
				<div className="subcell centered">A</div>
				<div className="subcell centered">W</div>
				<div className="subcell centered">SB</div>
				<div className="subcell centered">TB</div>
				<div className="subcell centered">MV</div>
				<div className="subcell centered">Mag</div>
				<div className="subcell centered">IP</div>
				<div className="subcell centered">FP</div>
			</div>
			<div className="flexrow">
				<div className="cell centered">{stats.A}</div>
				<div className="cell centered">{stats.W}</div>
				<div className="cell centered">{stats.SB}</div>
				<div className="cell centered">{stats.TB}</div>
				<div className="cell centered">{stats.MV}</div>
				<div className="cell centered">{stats.Mag}</div>
				<div className="cell centered">{stats.IP}</div>
				<div className="cell centered">{stats.FP}</div>
			</div>
		</div>
	);
}
