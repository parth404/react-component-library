import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilledWithIcon: Story = {
  args: {
    label: "Add new item",
    variant: "contained",
    icon: true,
  },
};

export const OutlinedWithIcon: Story = {
  args: {
    label: "Add item",
    variant: "outlined",
    icon: true,
  },
};

export const Filled: Story = {
  args: {
    label: "Add new item",
    variant: "contained",
  },
};

export const Outlined: Story = {
  args: {
    label: "Cancel",
    variant: "outlined",
  },
};

export const Custom: Story = {
  args: {
    label: "Save edits",
    icon: true,
    disableElevation: false,
    disabled: false,
    isCustom: true,
  },
};

export const CustomDisabled: Story = {
  args: {
    label: "Save edits",
    icon: true,
    disableElevation: false,
    disabled: true,
    isCustom: true,
  },
};
