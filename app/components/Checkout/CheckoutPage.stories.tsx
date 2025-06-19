import type { Meta, StoryObj } from '@storybook/react';
import { CheckoutPage } from './CheckoutPage';

const meta: Meta<typeof CheckoutPage> = {
  title: 'Pages/CheckoutPage',
  component: CheckoutPage,
  parameters: {
    layout: 'fullscreen',
    percy: {
      name: 'Checkout Page',
      widths: [375, 768, 1280, 1920],
    },
  },
  argTypes: {
    version: {
      control: 'select',
      options: ['v1', 'v2', 'v3', 'v4', 'v5'],
      description: 'Component version for testing different states',
    },
    showPromoBadge: {
      control: 'boolean',
      description: 'Show promotional banner',
    },
    baseFontSize: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
      description: 'Base font size for accessibility',
    },
    themeColor: {
      control: 'select',
      options: ['indigo', 'blue', 'purple', 'green'],
      description: 'Theme color for branding',
    },
    locale: {
      control: 'select',
      options: ['en', 'es', 'fr'],
      description: 'Language locale',
    },
    useWrapper: {
      control: 'boolean',
      description: 'Use wrapper div for layout',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Baseline - Original state - This Will be where we test!
export const Original: Story = {
  args: {
    version: 'v2',
    showPromoBadge: false,
    baseFontSize: 'base',
    themeColor: 'indigo',
    locale: 'fr',
    useWrapper: true,
  },
  parameters: {
    percy: { name: 'Checkout - Original (Baseline)' },
  },
};
