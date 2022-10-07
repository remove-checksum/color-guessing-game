import { render } from "solid-js/web";

import "./index.css";
import { Game } from "./components/Game/Game";

render(() => <Game />, document.getElementById("root") as HTMLElement);
