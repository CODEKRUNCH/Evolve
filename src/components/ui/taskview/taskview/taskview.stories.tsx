import { Meta, StoryObj } from '@storybook/react';

import { Taskview } from './taskview';

const meta: Meta<typeof Taskview> = {
  component: Taskview,
};

export default meta;

type Story = StoryObj<typeof Taskview>;

export const Default: Story = {
  args: {
    title: "Complete project documentation",
    description: "Write comprehensive docs for the new feature release.",
    status: "Completed",
    dueDate: "Oct 15, 2025",
    category: "Work",
    priority: "High",
    proofOfCompletion:
      "All documentation sections including API reference and user guide were completed.",
    comments: [
      {
        author: "Sarah Miller",
        content: "Great work on this! Very thorough and well structured.",
        timestamp: "2 hours ago",
      },
      {
        author: "John Smith",
        content: "Appreciate the attention to detail here.",
        timestamp: "1 hour ago",
      },
    ],
    onClose: () => alert("Modal closed!"),
  },
};
