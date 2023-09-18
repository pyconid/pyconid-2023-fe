import { conform, type FieldConfig } from "@conform-to/react"

import { cn } from "~/libs"
import { Checkbox } from "~/components/ui"
import { FormField, FormLabel } from "~/components/ui/form"
import { labelVariants } from "~/components/ui/label"

const checkboxProps = <T,>(field: FieldConfig<T>) => {
  const { type: typeGender, ...props } = conform.input(field, {
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
}

export const CheckboxInput = <T,>({
  label,
  field,
  children,
  className,
}: CheckboxInputProps<T>) => {
  return (
    <FormField className={cn(label && "space-y-4", className)}>
      {label ? (
        <span className={labelVariants({ className: "mb-4" })}>
          {label} {field.required ? " *" : null}
        </span>
      ) : null}
      <div className="flex">
        <Checkbox {...checkboxProps(field)} />
        <FormLabel className="ml-4" htmlFor={field.id}>
          {children}
        </FormLabel>
      </div>
    </FormField>
  )
}
