import { initialTodos } from "@/data/mockTodos";
import { TodoStatus } from "@/types/todo";
import type { Meta, StoryObj } from "@storybook/react";
import TodoList from "../components/TodoList";

const meta: Meta<typeof TodoList> = {
  title: "Components/TodoList",
  component: TodoList,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof TodoList>;

// Create sample todos for our stories
const sampleTodos = initialTodos;

export const Default: Story = {
  args: {
    todos: sampleTodos,
    onStatusChange: (id: number, status: TodoStatus) => {
      console.log(`Todo ${id} status changed to ${status}`);
    },
  },
};

export const Empty: Story = {
  args: {
    todos: [],
    onStatusChange: (id: number, status: TodoStatus) => {
      console.log(`Todo ${id} status changed to ${status}`);
    },
  },
};
