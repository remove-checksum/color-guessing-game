import { button, buttonText } from "./hexButton.css";

type HexButtonProps = {
  index: number;
  color: string;
  checkColor: (i: number) => void;
  reveal: boolean;
};

export const HexButton = (props: HexButtonProps) => {
  return (
    <button
      onClick={() => {
        props.checkColor(props.index);
      }}
      class={button}
      style={{ "background-color": props.reveal ? props.color : "none" }}
    >
      <span class={buttonText}>{props.color}</span>
    </button>
  );
};
