import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { theme } from "./theme.css";

const decorationProps = defineProperties({
  properties: {
    border: {
      large: {
        border: "10px solid",
        borderRadius: 10,
      },
    },
    borderColor: theme.colors,
  },
});
export const sprinkles = createSprinkles(decorationProps);

export type Sprinkles = Parameters<typeof sprinkles>[0];
