import styles from "./Avatar.module.css"

interface AvatarProps {
  name: string
  className?: string
}

function getInitials(name: string): string {
  // PascalCase detection: has uppercase letters beyond position 0
  // AND has at least one lowercase letter
  const hasInternalUppercase = /[A-Z]/.test(name.slice(1))
  const hasLowercase = /[a-z]/.test(name)

  if (hasInternalUppercase && hasLowercase) {
    // Extract first 2 uppercase letters
    return (name.match(/[A-Z]/g) ?? []).slice(0, 2).join("")
  }

  // Fallback: first letter uppercased
  return name.charAt(0).toUpperCase()
}

export default function Avatar({ name, className = "" }: AvatarProps) {
  const initials = getInitials(name)
  const classes = [styles.avatar, className].filter(Boolean).join(" ")

  return (
    <figure className={classes} aria-label={name} role="figure">
      {initials}
    </figure>
  )
}
