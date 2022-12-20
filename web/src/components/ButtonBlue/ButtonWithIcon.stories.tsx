import { Meta, StoryObj } from "@storybook/react";
import { ButtonBlue, ButtonBlueProps } from "./ButtonBlue";

export default {
  title: "Components/Button",
  component: ButtonBlue,
  args: {
    text: "Button",
  },
} as Meta<ButtonBlueProps>;

export const Default: StoryObj<ButtonBlueProps> = {};
