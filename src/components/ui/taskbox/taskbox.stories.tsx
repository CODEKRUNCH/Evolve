import { Meta, StoryObj } from '@storybook/react';

import { Taskbox } from './taskbox';

const meta: Meta<typeof Taskbox> = {
  component: Taskbox,
};

export default meta;

type Story = StoryObj<typeof Taskbox>;

export const Default: Story = {
  args: {
    title: 'Somethingg',
    description: 'Do this AS fast As Possible',
    status: 'done',
    category: 'Something',
    priority: 'low',
    dueDate: '15-10-2025',
    comments: 2,
    views: 2,
  },
};
