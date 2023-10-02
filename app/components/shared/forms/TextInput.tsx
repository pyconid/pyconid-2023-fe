import { conform, type FieldConfig } from "@conform-to/react"

import { Input } from "~/components/ui"
import { FormField, FormLabel } from "~/components/ui/form"

type TextInputProps<T> = {
  field: FieldConfig<T>
  label: string
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
  disabled?: boolean
  classNames?: {
    root?: string
    input?: string
  }
  description?: React.ReactNode
}

const TextInput = <T,>({
  field,
  label,
  type = "text",
  placeholder,
  classNames,
  disabled,
  description,
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
        disabled={disabled}
      />
      {field.error ? (
        <p
          className="text-sm text-red-500 md:h-4 md:text-base"
          id={field.errorId}
        >
          {field.error}
        </p>
      ) : null}
      {description ? (
        <p className="mb-4 text-sm text-muted-foreground md:h-4 md:text-base">
          {description}
        </p>
      ) : null}
    </FormField>
  )
}

export { TextInput }
