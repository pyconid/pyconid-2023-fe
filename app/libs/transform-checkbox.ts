export function transformCheckboxFields(
  fields: Record<string, boolean> | null,
): Record<string, "on" | "off"> | null {
  if (!fields) return null

  const transformedFields: Record<string, any> = { ...fields }
  Object.keys(fields).map((key) => {
    transformedFields[key] = transformedFields[key] === true ? "on" : "off"
    return key
  })

  return transformedFields
}
