import { Card } from './Card';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  args: {
    title: 'Card Title',
    description: 'This is a basic card component with some descriptive text to show how it looks.',
  },
};

export const WithImage = {
  args: {
    title: 'Beautiful Landscape',
    description: 'A stunning view of mountains and valleys.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop',
  },
};

export const WithBadge = {
  args: {
    title: 'Featured Article',
    description: 'This article has been featured on our homepage.',
    badge: 'Featured',
  },
};

export const WithActions = {
  args: {
    title: 'Product Card',
    description: 'A great product that you might be interested in purchasing.',
    actions: [
      <Button key="primary" variant="primary" size="small">Buy Now</Button>,
      <Button key="secondary" variant="outline" size="small">Learn More</Button>
    ],
  },
};

export const Elevated = {
  args: {
    title: 'Elevated Card',
    description: 'This card has a shadow effect.',
    variant: 'elevated',
  },
};

export const Dark = {
  args: {
    title: 'Dark Card',
    description: 'This card uses a dark theme.',
    variant: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Complete = {
  args: {
    title: 'Complete Example',
    description: 'This card shows all features: image, badge, and actions.',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=400&h=225&fit=crop',
    badge: 'New',
    actions: [
      <Button key="primary" variant="primary" size="small">View Details</Button>,
      <Button key="secondary" variant="secondary" size="small">Share</Button>
    ],
  },
};