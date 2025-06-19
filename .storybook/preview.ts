import type { Preview } from '@storybook/react';
import '../app/globals.css'; // Import your global CSS with Tailwind

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    percy: {
      skip: false,
      widths: [375, 768, 1280],
    },
  },
};

export default preview;