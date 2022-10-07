import { FlowComponent } from "solid-js";
import { square, squareText } from "./square.css";

interface Props {
  color: string;
}

export const Square: FlowComponent<Props, string> = (props) => {
  return (
    <div class={square} style={{ "background-color": props.color }}>
      <span class={squareText}>{props.children}</span>
    </div>
  );
};
