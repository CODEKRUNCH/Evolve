import { Meta, StoryObj } from '@storybook/react';

import { Taskcompletionchart } from './taskcompletionchart';

const meta: Meta<typeof Taskcompletionchart> = {
  component: Taskcompletionchart,
};

export default meta;

type Story = StoryObj<typeof Taskcompletionchart>;

export const Default: Story = {
  args: {
    data: [
      { day: 'Mon', yourTasks: 4, partnerTasks: 6 },
      { day: 'Tue', yourTasks: 6, partnerTasks: 5 },
      { day: 'Wed', yourTasks: 5, partnerTasks: 7 },
      { day: 'Thu', yourTasks: 10, partnerTasks: 2 },
      { day: 'Fri', yourTasks: 7, partnerTasks: 8 },
      { day: 'Sat', yourTasks: 5, partnerTasks: 4 },
      { day: 'Sun', yourTasks: 6, partnerTasks: 5 },
    ],
  },
};
