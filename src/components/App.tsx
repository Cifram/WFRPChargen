import * as React from "react";

export const App = (props: { mode: string }) => (
	<div>
		<h1>Warhammer Fantasy Character Generator</h1>
		Displaying {props.mode} mode
	</div>
);