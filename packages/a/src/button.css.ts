import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";

export const button = style([
  sprinkles({
    border: "large",
    borderColor: "blue",
  }),
  {
    padding: 20,
  },
]);
