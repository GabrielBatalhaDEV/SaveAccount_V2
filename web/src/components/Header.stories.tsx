import { Meta } from "@storybook/react";
import { Header, HeaderProps } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  args: {
    username: "Username",
  },
} as Meta<HeaderProps>;

export const Default = {};
