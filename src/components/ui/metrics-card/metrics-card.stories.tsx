import { Meta, StoryObj } from '@storybook/react-vite';

import { MetricsCard } from './metrics-card';

const meta: Meta<typeof MetricsCard> = {
  component: MetricsCard,
};

export default meta;

type Story = StoryObj<typeof MetricsCard>;

export const Default: Story = {
  args: {
    title: 'Your Tasks Completed',
    value: 2,
    change: '+2 from yesterday',
  },
};
