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

type FormFieldSetProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement> & {
  borderPosition?: "top" | "bottom"
}

const FormFieldSet = React.forwardRef<HTMLFieldSetElement, FormFieldSetProps>(
  ({ className, children, title, borderPosition = "top", ...props }, ref) => {
    return (
      <fieldset ref={ref} className={cn("mt-5 md:mt-10", className)} {...props}>
        <legend className="mb-2 w-full text-4xl font-bold tracking-tight text-black">
          {title}
        </legend>
        {borderPosition === "top" ? (
          <div className="mb-5 h-1.5 rounded-full bg-primary md:mb-10" />
        ) : null}
        <div className="space-y-3 md:space-y-6">{children}</div>
        {borderPosition === "bottom" ? (
          <div className="mt-5 h-1.5 rounded-full bg-primary md:mt-10" />
        ) : null}
      </fieldset>
    )
  },
)
FormFieldSet.displayName = "FormFieldSet"

export { FormLabel, FormDescription, FormMessage, FormField, FormFieldSet }
