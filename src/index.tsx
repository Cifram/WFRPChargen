import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";
import { State } from "./state/state";

let state: State = { characters: [] };

ReactDOM.render(
	<App state={state} />,
	document.getElementById("example")
);