import type { ComponentProps } from "react"
import { conform, type FieldConfig } from "@conform-to/react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui"
import { FormField, FormLabel } from "~/components/ui/form"

type SelectInputProps<T> = {
  field: FieldConfig<T>
  label: string
  placeholder?: string
  className?: string
  children: React.ReactNode
} & ComponentProps<typeof Select>

const SelectInput = <T,>({
  field,
  label,
  placeholder,
  className,
  children,
  ...props
}: SelectInputProps<T>) => {
  return (
    <FormField className={className}>
      <FormLabel htmlFor={field.id}>
        {label} {field.required ? " *" : null}
      </FormLabel>
      <Select {...conform.input(field)} {...props}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent position="popper">{children}</SelectContent>
      </Select>
    </FormField>
  )
}

SelectInput.Option = SelectItem

export { SelectInput }
