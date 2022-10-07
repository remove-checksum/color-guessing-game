import { Component, For } from "solid-js";
import { center } from "./game.css";
import { Square as Square } from "../Square/Square";
import { HexButton } from "../HexButton/HexButton";
import { useGameState } from "../../logic/gameState";

export const Game: Component = () => {
  const { selected, statusMessage, checkColor, colors, reveal } =
    useGameState();

  return (
    <div class={center}>
      <Square color={selected()}>{statusMessage()}</Square>
      <div>
        <For each={colors()}>
          {(color, i) => {
            return (
              <HexButton
                index={i()}
                color={color}
                checkColor={checkColor}
                reveal={reveal()}
              />
            );
          }}
        </For>
      </div>
    </div>
  );
};
