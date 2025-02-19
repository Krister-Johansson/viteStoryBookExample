import "../src/index.css"; // Adjust the path based on your project structure
import type { Preview } from "@storybook/react";
import { fn } from "@storybook/test";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const Primary = {
  args: {
    onClick: fn(),
    onChange: fn(),
    // other props...
  },
};
