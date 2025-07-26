import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const TypographyVariants = cva("font-sans text-secondary-400", {
  variants: {
    level: {
      h1: "text-5xl md:text-h1 font-bold",
      h2: "text-4xl md:text-h2 font-bold",
      h3: "text-3xl md:text-h3 font-semibold",
      h4: "text-2xl md:text-h4 font-semibold",
      h5: "text-xl md:text-h5 font-medium",
      h6: "text-lg md:text-h6 font-medium",
      body: "",
    },
    size: {
      default: "text-base",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base md:text-lg",
      lg: "text-xl md:text-xl",
    },
  },
  compoundVariants: [
    {
      level: "body",
      size: undefined,
      className: "text-base md:text-lg font-normal",
    },
  ],
  defaultVariants: {
    level: "body",
    size: "default",
  },
})

type TypographyProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof TypographyVariants> & {
    level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body"
    size?: "xs" | "sm" | "md" | "lg" | "default"
    className?: string
    children: React.ReactNode
  }

export default function Typography({
  level = "body",
  size,
  className,
  children,
  ...rest
}: TypographyProps) {
  let Tag: React.ElementType
  let variantLevel: TypographyProps["level"]
  let variantSize: TypographyProps["size"] | undefined = undefined

  if (level && ["h1", "h2", "h3", "h4", "h5", "h6"].includes(level)) {
    Tag = level as React.ElementType
    variantLevel = level
    variantSize = undefined // ignore size for headings
  } else {
    Tag = "p"
    variantLevel = "body"
    variantSize = size
  }

  const classes = twMerge(
    TypographyVariants({ level: variantLevel, size: variantSize, className })
  )

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  )
}
