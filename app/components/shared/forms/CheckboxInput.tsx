import { conform, type FieldConfig } from "@conform-to/react"

import { cn } from "~/libs"
import { Checkbox } from "~/components/ui"
import { FormField, FormLabel } from "~/components/ui/form"
import { labelVariants } from "~/components/ui/label"

const checkboxProps = <T,>(field: FieldConfig<T>) => {
  const { type, ...props } = conform.input(field, {
    type: "checkbox",
  })
  return props
}

type CheckboxInputProps<T> = {
  field: FieldConfig<T>
  label?: string
  placeholder?: string
  className?: string
  children: React.ReactNode
  disabled?: boolean
}

export const CheckboxInput = <T,>({
  label,
  field,
  children,
  className,
  disabled,
}: CheckboxInputProps<T>) => {
  return (
    <FormField className={cn(label && "space-y-4", className)}>
      {label ? (
        <span className={labelVariants({ className: "mb-4" })}>
          {label} {field.required ? " *" : null}
        </span>
      ) : null}
      <div className="flex items-center">
        <Checkbox {...checkboxProps(field)} disabled={disabled} />
        <FormLabel className="ml-4" htmlFor={field.id}>
          {children}
        </FormLabel>
      </div>
      {field.error ? (
        <p className="h-4 text-sm text-red-500 md:text-base" id={field.errorId}>
          {field.error}
        </p>
      ) : null}
    </FormField>
  )
}
