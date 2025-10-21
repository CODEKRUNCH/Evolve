import { Meta, StoryObj } from '@storybook/react-vite';

import { ProgressbarProfile } from './progressbar-profile';

const meta: Meta<typeof ProgressbarProfile> = {
  component: ProgressbarProfile,
};

export default meta;

type Story = StoryObj<typeof ProgressbarProfile>;

export const Default: Story = {
  args: {
    username: 'Alex Chen',
    completionPercentage: 67,
    approvedCount: 15,
    pendingCount: 1,
    rejectedCount: 0,
  },
};
