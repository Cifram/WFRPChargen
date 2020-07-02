import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./store/reducers/rootReducer";

const store = createStore(rootReducer);

function tick() {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById("root")
	);
	requestAnimationFrame(tick);
}
tick();
