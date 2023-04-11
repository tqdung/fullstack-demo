import { extendTheme } from "@chakra-ui/react";

// All global style overrides
import styles from "./styles";

// A;; semantic tokens overrides
import { semanticTokens } from "./semantic-tokens";

// All foundations style overrides
import { foundations } from "./foundations";

// Component style overrides
import { components } from "./components";

export const theme = extendTheme({
  ...foundations,
  styles,
  components,
  semanticTokens,
});

export default theme;
