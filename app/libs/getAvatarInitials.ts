export function getAvatarInitials(
  firstName: string | undefined | null,
  lastName: string | undefined | null,
) {
  if (firstName && lastName) {
    return `${firstName[0]}${lastName[0]}`.toUpperCase()
  }
  return ""
}
