import { sprinkles } from "@pkg/a";
import { style } from "@vanilla-extract/css";

export const button = style([
  sprinkles({
    border: "large",
    borderColor: "blue",
  }),
  {
    padding: 20,
  },
]);
