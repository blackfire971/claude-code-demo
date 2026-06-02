import styles from "./Skeleton.module.css"

type SkeletonVariant = "default" | "text" | "circle"
type SkeletonSize = "sm" | "md" | "lg" | "xl"

interface SkeletonProps {
  variant?: SkeletonVariant
  size?: SkeletonSize
  width?: string
  height?: string
  className?: string
}

function getVariantClass(variant: SkeletonVariant): string {
  switch (variant) {
    case "text":
      return styles.text
    case "circle":
      return styles.circle
    default:
      return ""
  }
}

function getSizeClass(size: SkeletonSize): string {
  switch (size) {
    case "sm":
      return styles.sm
    case "md":
      return styles.md
    case "lg":
      return styles.lg
    case "xl":
      return styles.xl
    default:
      return styles.md
  }
}

export default function Skeleton({
  variant = "default",
  size = "md",
  width,
  height,
  className = "",
}: SkeletonProps) {
  const classes = [
    styles.skeleton,
    getVariantClass(variant),
    getSizeClass(size),
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <div
      className={classes}
      style={{ width, height }}
      aria-hidden="true"
    />
  )
}
