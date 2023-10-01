import type { ComponentProps } from "react"
import { conform, type FieldConfig } from "@conform-to/react"

import { cn } from "~/libs"
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
  extra?: React.ReactNode
} & ComponentProps<typeof Select>

const SelectInput = <T,>({
  field,
  label,
  placeholder,
  className,
  children,
  extra,
  ...props
}: SelectInputProps<T>) => {
  return (
    <FormField className={className}>
      <FormLabel
        className={cn(extra && "flex items-center gap-3")}
        htmlFor={field.id}
      >
        <span>
          {label} {field.required ? " *" : null}
        </span>
        {extra ? (
          <div className="text-sm text-muted-foreground md:text-base">
            {extra}
          </div>
        ) : null}
      </FormLabel>
      <Select {...conform.input(field)} {...props}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent position="popper">{children}</SelectContent>
      </Select>
      {field.error ? (
        <p
          className="text-sm text-red-500 md:h-4 md:text-base"
          id={field.errorId}
        >
          {field.error}
        </p>
      ) : null}
    </FormField>
  )
}

SelectInput.Option = SelectItem

export { SelectInput }
