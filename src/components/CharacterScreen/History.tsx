import * as React from "react";
import { Character } from "../../state/character";

export function History(props: { char: Character }) {
	return (
		<div className="flexcol history">
			<div className="header">CREATION</div>
			<div className="flexcol event">
				<div className="title">Shallya's Mercy</div>
				<div className="content">Ag 23 to 31</div>
			</div>
			<div className="header">ADVANCEMENT</div>
		</div>
	);
}
