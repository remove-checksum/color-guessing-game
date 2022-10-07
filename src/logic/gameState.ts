import { createSignal, batch } from "solid-js";

const COLORS_AMOUNT = 3;

const generateRandomHexColor = (length: number = 6) => {
  return "#".concat(
    Array.from({ length: length }, () =>
      Math.floor(Math.random() * 16).toString(16)
    ).join("")
  );
};

const generateColors = () =>
  Array.from({ length: COLORS_AMOUNT }, generateRandomHexColor);
const randomIndex = () => Math.floor(Math.random() * COLORS_AMOUNT);

const [colors, setColors] = createSignal(generateColors());
const [selectedIndex, setSelectedIndex] = createSignal(randomIndex());
const [statusMessage, setStatusMessage] =
  createSignal<Messages>("Guess a color!");
const selected = () => colors()[selectedIndex()];
const reveal = () => statusMessage() === MESSAGES.WIN;

const MESSAGES = {
  WIN: "You've won!",
  LOST: "You lost..",
  PLAYING: "Guess a color!",
} as const;

type Messages = typeof MESSAGES[keyof typeof MESSAGES];
type StatusMessages = typeof MESSAGES.WIN | typeof MESSAGES.LOST;

const flashStatusMessage = (message: StatusMessages, duration = 800) => {
  setStatusMessage(message);
  setTimeout(() => {
    batch(() => {
      setStatusMessage(MESSAGES.PLAYING);
      setColors(generateColors());
      setSelectedIndex(randomIndex());
    });
  }, duration);
};

export const useGameState = () => {
  const checkColor = (i: number) => {
    if (statusMessage() === MESSAGES.LOST || statusMessage() === MESSAGES.WIN)
      return;
    const byIdx = colors()[i];

    if (byIdx === selected()) {
      flashStatusMessage(MESSAGES.WIN);
    } else {
      flashStatusMessage(MESSAGES.LOST);
    }
  };

  return { selected, statusMessage, checkColor, colors, reveal };
};
