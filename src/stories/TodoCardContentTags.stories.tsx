import type { Meta, StoryObj } from "@storybook/react";
import TodoCardContentTags from "../components/TodoCardContentTags";

const meta: Meta<typeof TodoCardContentTags> = {
  title: "Components/TodoCardContentTags",
  component: TodoCardContentTags,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TodoCardContentTags>;

export const Default: Story = {
  args: {
    tags: ["important", "work", "urgent"],
  },
};

export const SingleTag: Story = {
  args: {
    tags: ["personal"],
  },
};

export const ManyTags: Story = {
  args: {
    tags: [
      "work",
      "urgent",
      "meeting",
      "presentation",
      "client",
      "follow-up",
      "deadline",
    ],
  },
};

export const EmptyTags: Story = {
  args: {
    tags: [],
  },
};
