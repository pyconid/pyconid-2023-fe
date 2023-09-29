export function getAvatarInitials(
  firstName: string | undefined,
  lastName: string | undefined,
) {
  if (firstName && lastName) {
    return `${firstName[0]}${lastName[0]}`.toUpperCase()
  }
  return ""
}
