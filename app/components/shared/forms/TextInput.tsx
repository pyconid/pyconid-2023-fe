import { conform, type FieldConfig } from "@conform-to/react"

import { Input } from "~/components/ui"
import { FormField, FormLabel } from "~/components/ui/form"

type TextInputProps<T> = {
  field: FieldConfig<T>
  label: string
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
  classNames?: {
    root?: string
    input?: string
  }
}

const TextInput = <T,>({
  field,
  label,
  type = "text",
  placeholder,
  classNames,
}: TextInputProps<T>) => {
  return (
    <FormField className={classNames?.root}>
      <FormLabel htmlFor={field.id}>
        {label} {field.required ? " *" : null}
      </FormLabel>
      <Input
        className={classNames?.input}
        {...conform.input(field)}
        type={type}
        placeholder={placeholder}
      />
      <p className="h-4 text-red-500" id={field.errorId}>
        {field.error}
      </p>
    </FormField>
  )
}

export { TextInput }
