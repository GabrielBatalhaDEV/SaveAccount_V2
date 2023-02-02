import { Meta, StoryObj } from "@storybook/react";
import { InputWithIcon, InputWithIconProps } from "./InputWithIcon";

export default {
  title: "Components/InputWithIcon",
  component: InputWithIcon,
  args: {
    icon: "Email",
    placeholder: "placeholder",
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<InputWithIconProps>;

export const Default = {
  argTypes: {
    icon: {
      options: ["Email", "Password"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as StoryObj<InputWithIconProps>;
