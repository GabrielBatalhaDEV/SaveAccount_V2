import { themes } from "@storybook/theming";

import "../src/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  doc: {
    theme: themes.dark,
  },
};
