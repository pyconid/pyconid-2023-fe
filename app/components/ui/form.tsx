import * as React from "react"
import type * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "~/libs"
import { Label } from "~/components/ui/label"

const FormField = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("w-full space-y-2", className)} {...props} />
  )
})
FormField.displayName = "FormField"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <Label ref={ref} className={cn(className)} {...props} />
})
FormLabel.displayName = "FormLabel"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...props}
    >
      {children}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

const FormFieldSet = React.forwardRef<
  HTMLFieldSetElement,
  React.FieldsetHTMLAttributes<HTMLFieldSetElement>
>(({ className, children, title, ...props }, ref) => {
  return (
    <fieldset ref={ref} className={cn("mt-10", className)} {...props}>
      <legend className="mb-2 w-full text-4xl font-bold tracking-tight text-black">
        {title}
      </legend>
      <div className="mb-10 h-1.5 rounded-full bg-primary" />
      <div className="space-y-10">{children}</div>
    </fieldset>
  )
})
FormFieldSet.displayName = "FormFieldSet"

export { FormLabel, FormDescription, FormMessage, FormField, FormFieldSet }
