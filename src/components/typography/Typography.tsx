import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const typographyVariants = cva("font-sans", {
  variants: {
    variant: {
      h1: "text-5xl md:text-h1 font-bold text-gray-900",
      h2: "text-4xl md:text-h2 font-bold text-gray-900",
      h3: "text-3xl md:text-h3 font-semibold text-gray-900",
      h4: "text-2xl md:text-h4 font-semibold text-gray-900",
      h5: "text-xl md:text-h5 font-medium text-gray-900",
      h6: "text-lg md:text-h6 font-medium text-gray-900",
      body: "text-base md:text-lg font-normal text-gray-700",
      caption: "text-sm font-normal text-gray-600",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
    },
    color: {
      primary: "text-primary-400",
      secondary: "text-secondary-400",
      error: "text-error-400",
      success: "text-success-400",
      warning: "text-warning-400",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  compoundVariants: [
    // Body variant ignores weight from variant and uses explicit weight
    {
      variant: "body",
      weight: "light",
      className: "font-light",
    },
    {
      variant: "body",
      weight: "medium",
      className: "font-medium",
    },
    {
      variant: "body",
      weight: "semibold",
      className: "font-semibold",
    },
    {
      variant: "body",
      weight: "bold",
      className: "font-bold",
    },
  ],
  defaultVariants: {
    variant: "body",
    color: undefined,
    weight: undefined,
    size: undefined,
  },
});

// Mapping variant to HTML elements
const variantElementMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  caption: "span",
} as const;

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  variant?: keyof typeof variantElementMap;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = "body",
      as,
      size,
      color,
      weight,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Determine the HTML element to use
    const Element = as || variantElementMap[variant || "body"];

    // For headings, ignore size prop as they have predefined sizes
    const isHeading =
      variant && ["h1", "h2", "h3", "h4", "h5", "h6"].includes(variant);
    const effectiveSize = isHeading ? undefined : size;

    // For headings, ignore weight prop as they have predefined weights
    const effectiveWeight = isHeading ? undefined : weight;

    return (
      <Element
        ref={ref}
        className={twMerge(
          typographyVariants({
            variant,
            size: effectiveSize,
            color,
            weight: effectiveWeight,
          }),
          className
        )}
        {...props}
      >
        {children}
      </Element>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
