import type { Meta, StoryObj } from "@storybook/react";
import TodoCardTitle from "../components/TodoCardTitle";

const meta: Meta<typeof TodoCardTitle> = {
  title: "Components/TodoCardTitle",
  component: TodoCardTitle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TodoCardTitle>;

export const Pending: Story = {
  args: {
    id: 1,
    title: "Complete the project",
    status: "pending",
    onStatusChange: (id, status) => {
      console.log(`Todo ${id} status changed to ${status}`);
    },
  },
};

export const Completed: Story = {
  args: {
    id: 2,
    title: "Write documentation",
    status: "completed",
    onStatusChange: (id, status) => {
      console.log(`Todo ${id} status changed to ${status}`);
    },
  },
};

export const LongTitle: Story = {
  args: {
    id: 3,
    title:
      "This is a very long todo item title that might wrap to multiple lines and need special handling in the UI",
    status: "pending",
    onStatusChange: (id, status) => {
      console.log(`Todo ${id} status changed to ${status}`);
    },
  },
};
