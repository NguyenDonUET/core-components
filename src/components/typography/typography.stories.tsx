import type { Meta, StoryObj } from "@storybook/react-vite";
import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A flexible Typography component built with CVA (Class Variance Authority) that supports headings, body text, captions, and overlines with customizable colors, sizes, and weights.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "body",
        "caption",
        "overline",
      ],
      description:
        "Typography variant that determines the base styling and HTML element",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "body" },
      },
    },
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg"],
      description:
        "Text size (only applies to body, caption, and overline variants)",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "success", "warning"],
      description: "Text color variant",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    weight: {
      control: "select",
      options: ["light", "normal", "medium", "semibold", "bold"],
      description:
        "Font weight (only applies to body, caption, and overline variants)",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    as: {
      control: "text",
      description: "Override the default HTML element",
      table: {
        disable: true,
      },
    },
    children: {
      control: "text",
      description: "Text content",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
      table: {
        disable: true,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // parameters: {
  //   // controls: { disable: true },
  // },
  // render: () => (
  //   <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
  //     <Typography>Body text - Default paragraph text for content</Typography>
  //   </div>
  // ),
  args: {
    variant: "body",
    children: "Body text - Default paragraph text for content",
  },
};

export const Heading1: Story = {
  args: {
    variant: "h1",
    children: "Main Page Title",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    children: "Section Title",
  },
};

export const Heading3: Story = {
  args: {
    variant: "h3",
    children: "Subsection Title",
  },
};

export const Heading4: Story = {
  args: {
    variant: "h4",
    children: "Minor Heading",
  },
};

export const Heading5: Story = {
  args: {
    variant: "h5",
    children: "Small Heading",
  },
};

export const Heading6: Story = {
  args: {
    variant: "h6",
    children: "Smallest Heading",
  },
};

export const BodySizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography variant="body" size="xs">
        Extra small body text
      </Typography>
      <Typography variant="body" size="sm">
        Small body text
      </Typography>
      <Typography variant="body" size="base">
        Base body text (default)
      </Typography>
      <Typography variant="body" size="lg">
        Large body text
      </Typography>
    </div>
  ),
};

export const BodyWeights: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Shows all available font weight options for body text.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography variant="body" weight="light">
        Light weight body text
      </Typography>
      <Typography variant="body" weight="normal">
        Normal weight body text (default)
      </Typography>
      <Typography variant="body" weight="medium">
        Medium weight body text
      </Typography>
      <Typography variant="body" weight="semibold">
        Semibold weight body text
      </Typography>
      <Typography variant="body" weight="bold">
        Bold weight body text
      </Typography>
    </div>
  ),
};

export const CaptionVariants: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Shows different styling options available for caption text.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography variant="caption">Default caption text</Typography>
      <Typography variant="caption" size="xs">
        Extra small caption
      </Typography>
      <Typography variant="caption" weight="medium">
        Medium weight caption
      </Typography>
      <Typography variant="caption" weight="semibold">
        Semibold caption
      </Typography>
    </div>
  ),
};

export const ColorVariants: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Shows all available color variants across different typography elements.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <Typography variant="h3">Heading Colors</Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginTop: "1rem",
          }}
        >
          <Typography variant="h4" color="primary">
            Primary Color Heading
          </Typography>
          <Typography variant="h4" color="secondary">
            Secondary Color Heading
          </Typography>
          <Typography variant="h4" color="error">
            Error Color Heading
          </Typography>
          <Typography variant="h4" color="success">
            Success Color Heading
          </Typography>
          <Typography variant="h4" color="warning">
            Warning Color Heading
          </Typography>
        </div>
      </div>

      <div>
        <Typography variant="h3">Body Text Colors</Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginTop: "1rem",
          }}
        >
          <Typography variant="body" color="primary">
            Primary color body text
          </Typography>
          <Typography variant="body" color="secondary">
            Secondary color body text
          </Typography>
          <Typography variant="body" color="error">
            Error color body text
          </Typography>
          <Typography variant="body" color="success">
            Success color body text
          </Typography>
          <Typography variant="body" color="warning">
            Warning color body text
          </Typography>
        </div>
      </div>
    </div>
  ),
};

export const TypographyScale: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Demonstrates the typography scale across different variants for visual comparison.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Typography variant="h1">The Quick Brown Fox (H1)</Typography>
      <Typography variant="h2">The Quick Brown Fox (H2)</Typography>
      <Typography variant="h3">The Quick Brown Fox (H3)</Typography>
      <Typography variant="h4">The Quick Brown Fox (H4)</Typography>
      <Typography variant="h5">The Quick Brown Fox (H5)</Typography>
      <Typography variant="h6">The Quick Brown Fox (H6)</Typography>
      <Typography variant="body">The Quick Brown Fox (Body)</Typography>
      <Typography variant="caption">The Quick Brown Fox (Caption)</Typography>
    </div>
  ),
};
