import { Meta, StoryObj } from "@storybook/react";
import { InputWithIcon, InputWithIconProps } from "./InputWithIcon";

export default {
  title: "Components/InputWithIcon",
  component: InputWithIcon,
  args: {
    type: "email",
    placeholder: "placeholder",
  },
} as Meta<InputWithIconProps>;

export const Default = {
  argTypes: {
    type: {
      options: ["email", "password"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as StoryObj<InputWithIconProps>;
