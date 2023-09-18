import { conform, type FieldConfig } from "@conform-to/react"

import { Input } from "~/components/ui"
import { FormField, FormLabel } from "~/components/ui/form"

type TextInputProps<T> = {
  field: FieldConfig<T>
  label: string
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
  className?: string
}

const TextInput = <T,>({
  field,
  label,
  type = "text",
  placeholder,
  className,
}: TextInputProps<T>) => {
  return (
    <FormField className={className}>
      <FormLabel htmlFor={field.id}>
        {label} {field.required ? " *" : null}
      </FormLabel>
      <Input {...conform.input(field)} type={type} placeholder={placeholder} />
    </FormField>
  )
}

export { TextInput }
