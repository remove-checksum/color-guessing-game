import { style } from "@vanilla-extract/css";

export const buttonText = style({
  fontFamily: "monospace",
  fontSize: 19,
  color: "#dddddd",
  backgroundColor: "#333777",
  borderRadius: 5,
  padding: 2,
  paddingInline: 10,
});

export const button = style({
  border: "4px solid #333777",
  padding: 10,
  paddingInline: 20,
  backgroundColor: "#dddddd",
  borderRadius: 7,
  cursor: "pointer",
  selectors: {
    "&:not(:last-child)": {
      marginRight: 25,
    },
  },
});
