import type { Meta, StoryObj } from "@storybook/react";
import TodoCard from "../components/TodoCard";
import { TodoStatus } from "@/types/todo";

const meta: Meta<typeof TodoCard> = {
  title: "Components/TodoCard",
  component: TodoCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof TodoCard>;

export const Default: Story = {
  args: {
    todo: {
      id: 1,
      title: "Complete project documentation",
      description: "Write comprehensive documentation for the new features",
      status: "in-progress",
      created: new Date("2024-03-20"),
      completed: undefined,
      tags: ["documentation", "feature"],
      assigned: {
        name: "John Doe",
        avatarUrl: "https://example.com/avatar.png",
      },
    },
    onStatusChange: (id: number, status: TodoStatus) => {
      console.log(`Status changed for todo ${id} to ${status}`);
    },
  },
};

export const Completed: Story = {
  args: {
    todo: {
      id: 2,
      title: "Setup development environment",
      description: "Install and configure all necessary development tools",
      status: "completed",
      created: new Date("2024-03-15"),
      completed: new Date("2024-03-19"),
      tags: ["feature", "development"],
      assigned: {
        name: "John Doe",
        avatarUrl: "https://example.com/avatar.png",
      },
    },
    onStatusChange: (id: number, status: TodoStatus) => {
      console.log(`Status changed for todo ${id} to ${status}`);
    },
  },
};

export const NoTags: Story = {
  args: {
    todo: {
      id: 3,
      title: "Review pull request",
      description: "Review and provide feedback on the latest PR",
      status: "pending",
      created: new Date("2024-03-21"),
      completed: undefined,
      tags: [],
      assigned: {
        name: "Jane Smith",
        avatarUrl: "https://example.com/avatar.png",
      },
    },
    onStatusChange: (id: number, status: TodoStatus) => {
      console.log(`Status changed for todo ${id} to ${status}`);
    },
  },
};

export const Unassigned: Story = {
  args: {
    todo: {
      id: 4,
      title: "Create new feature",
      description: "Implement a new feature in the project",
      status: "pending",
      created: new Date("2024-03-22"),
      completed: undefined,
      tags: ["feature", "development"],
      assigned: null,
    },
    onStatusChange: (id: number, status: TodoStatus) => {
      console.log(`Status changed for todo ${id} to ${status}`);
    },
  },
};
