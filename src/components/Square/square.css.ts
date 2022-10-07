import { style } from "@vanilla-extract/css";

export const square = style({
  width: 500,
  height: 500,
  backgroundColor: "red",
  display: "grid",
  alignContent: "center",
  marginBottom: 32,
  borderRadius: 24,
  border: "4px solid #333777",
});

export const squareText = style({
  fontSize: 42,
  backgroundColor: "#dddddd",
  color: "#333777",
  width: "fit-content",
  margin: "0 auto",
  padding: 10,
  paddingInline: 25,
  borderRadius: 12,
  border: "4px solid #333777",
});
