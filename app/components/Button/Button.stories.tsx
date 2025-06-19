import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    percy: {
      name: 'Button Component',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'outline'],
      description: 'Button style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Button Component - Primary",
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  name: "Button Component - Secondary",
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Danger: Story = {
  name: "Button Component - Danger",
  args: {
    children: 'Danger Button',
    variant: 'danger',
  },
};

export const Outline: Story = {
  name: "Button Component - Outline",
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Small: Story = {
  name: "Button Component - Small",
  args: {
    children: 'Small Button',
    size: 'small',
  },
};

export const Large: Story = {
  name: "Button Component - Large",
  args: {
    children: 'Large Button',
    size: 'large',
  },
};

export const Disabled: Story = {
  name: "Button Component - Disabled",
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

// Story with custom render function
export const AllVariants: Story = {
  name: "Button Component - AllVariants",
  render: () => (
    <div className="space-y-4">
      <div className="space-x-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="outline">Outline</Button>
      </div>
      <div className="space-x-4">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <div>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  ),
  parameters: {
    percy: {
      name: 'Button - All Variants',
    },
  },
};