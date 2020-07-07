import * as React from "react";
import * as ReactDOM from "react-dom";
import * as fs from "fs";

import { App } from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./store/reducers/rootReducer";
import { Character } from "./store/state/character";
import { addCharacter } from "./store/actions/AddChracter";

const store = createStore(rootReducer);

const charDirName = "./characters/";
{
	if (!fs.existsSync(charDirName)) {
		fs.mkdirSync(charDirName);
	}
	const fileNames = fs.readdirSync(charDirName);
	for (let fileName of fileNames) {
		let json = fs.readFileSync(`${charDirName}${fileName}`, "utf8");
		let char = JSON.parse(json) as Character;
		store.dispatch(addCharacter(char));
	}
}

const savedChars = store.getState().characters;

function saveCharacter(char: Character) {
	let json = JSON.stringify(char);
	fs.writeFile(
		`${charDirName}${char.name} - ${char.race} ${char.career}.json`,
		json,
		(err) => {
			if (err != null) {
				console.error(`Failed to write ${char.name} to file`);
			}
		}
	);
}

function tick() {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById("root")
	);

	let state = store.getState();
	if (state.characters != savedChars) {
		if (state.characters.length > savedChars.length) {
			saveCharacter(state.characters[state.characters.length - 1]);
		} else {
			for (let i = 0; i < state.characters.length; i++) {
				if (state.characters[i] != savedChars[i]) {
					saveCharacter(state.characters[i]);
					break;
				}
			}
		}
	}

	requestAnimationFrame(tick);
}
tick();
