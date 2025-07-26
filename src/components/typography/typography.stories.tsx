import type { Meta, StoryObj } from "@storybook/react-vite"
import { Typography } from "./index"

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible Typography component with support for different heading levels and text sizes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "This is the default typography",
  },
  argTypes: {
    children: {
      control: { type: "text" },
      description: "The text content to display",
    },
    level: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
}

export const Heading: Story = {
  args: {
    level: "h2",
    children: "Heading Example",
  },
  argTypes: {
    level: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "The semantic level of the heading",
    },
    children: {
      control: { type: "text" },
      description: "The heading text",
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
}

export const BodyText: Story = {
  args: {
    level: "body",
    size: "md",
    children: "This is body text",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
      description: "The size variant for body text",
    },
    children: {
      control: { type: "text" },
      description: "The body text",
    },
    level: {
      table: {
        disable: true,
      },
    },
  },
}
