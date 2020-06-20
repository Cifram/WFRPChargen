import * as React from "react";
import { Character } from "../../store/state/character";

export function PersonalSection(props: { char: Character }) {
	return (
		<div className="flexcol block">
			<div className="header">PERSONAL DETAILS</div>
			<div className="flexrow">
				<div className="flexrow cell">
					<div className="title">AGE</div>
					<div className="content">{props.char.age}</div>
				</div>
				<div className="flexrow cell">
					<div className="title">GENDER</div>
					<div className="content">{props.char.gender}</div>
				</div>
			</div>
			<div className="flexrow">
				<div className="flexrow cell">
					<div className="title">EYE COLOR</div>
					<div className="content"></div>
				</div>
				<div className="flexrow cell">
					<div className="title">WEIGHT</div>
					<div className="content">{props.char.weight} lbs</div>
				</div>
			</div>
			<div className="flexrow">
				<div className="flexrow cell">
					<div className="title">HAIR COLOR</div>
					<div className="content"></div>
				</div>
				<div className="flexrow cell">
					<div className="title">HEIGHT</div>
					<div className="content">
						{Math.floor(props.char.height / 12)}'{props.char.height % 12}"
					</div>
				</div>
			</div>
			<div className="flexrow">
				<div className="flexrow cell">
					<div className="title">STAR SIGN</div>
					<div className="content"></div>
				</div>
				<div className="flexrow cell">
					<div className="title">SIBLINGS</div>
					<div className="content"></div>
				</div>
			</div>
			<div className="flexrow cell">
				<div className="title">BIRTHPLACE</div>
				<div className="content">{props.char.birthplace}</div>
			</div>
		</div>
	);
}
