import * as React from "react";

export const EventHeader = (props: { title: string; remove?: () => void }) => (
	<div className="flexrow title">
		<div className="titleText">{props.title}</div>
		{props.remove == undefined ? (
			""
		) : (
			<div className="remove" onClick={props.remove} />
		)}
	</div>
);
