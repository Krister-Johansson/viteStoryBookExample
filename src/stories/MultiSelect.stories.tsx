import type { Meta, StoryObj } from "@storybook/react";
import MultiSelect from "../components/MultiSelect";

const meta: Meta<typeof MultiSelect> = {
  title: "Components/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  args: {
    value: [],
    options: ["Apple", "Banana", "Orange", "Mango", "Pineapple"],
    placeholder: "Select fruits",
    onChange: (value) => console.log("Selected values:", value),
  },
};

export const WithPreselectedValues: Story = {
  args: {
    value: ["Apple", "Banana"],
    options: ["Apple", "Banana", "Orange", "Mango", "Pineapple"],
    placeholder: "Select fruits",
    onChange: (value) => console.log("Selected values:", value),
  },
};

export const CustomOptions: Story = {
  args: {
    value: [],
    options: ["React", "Vue", "Angular", "Svelte", "Next.js"],
    placeholder: "Select frameworks",
    onChange: (value) => console.log("Selected values:", value),
  },
};

export const WithCheckboxes: Story = {
  args: {
    value: [],
    options: ["React", "Vue", "Angular", "Svelte", "Next.js"],
    placeholder: "Select frameworks",
    onChange: (value) => console.log("Selected values:", value),
  },
};
