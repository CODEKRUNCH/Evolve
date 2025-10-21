import { Meta, StoryObj } from '@storybook/react';

import { Taskbox } from './taskbox';

const meta: Meta<typeof Taskbox> = {
  component: Taskbox,
};

export default meta;

type Story = StoryObj<typeof Taskbox>;

export const Default: Story = {
  args: {}
};
