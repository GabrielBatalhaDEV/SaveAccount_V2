import { Meta } from "@storybook/react";
import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  args: {
    username: "Username",
  },
} as Meta;

export const Default = {};
