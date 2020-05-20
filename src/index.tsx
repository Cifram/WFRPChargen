import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";
import { State } from "./state/state";

let state: State = { characters: [], dirty: true, selectedCharacter: null };

function tick() {
	if (state.dirty) {
		state.dirty = false;
		ReactDOM.render(
			<App state={state} />,
			document.getElementById("root")
		);
	}
	requestAnimationFrame(tick);
}
tick();