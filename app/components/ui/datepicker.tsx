"use client"

import * as React from "react"
import { conform, useInputEvent, type FieldConfig } from "@conform-to/react"
import { format, formatISO, parseISO } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "~/libs"

import { Button } from "./button"
import { Calendar } from "./calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

type DatePickerProps<T> = { field: FieldConfig<T> }

export function DatePicker<T>({ field }: DatePickerProps<T>) {
  const defaultDate = field.defaultValue
    ? parseISO(field.defaultValue as string)
    : undefined
  const [date, setDate] = React.useState<Date | undefined>(defaultDate)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setDateString] = React.useState<string>()
  const baseInputRef = React.useRef<HTMLInputElement>(null)
  const customInputRef = React.useRef<HTMLInputElement>(null)
  const control = useInputEvent({
    ref: baseInputRef,
    // Reset the state on form reset
    onReset: () => setDateString((field.defaultValue as string) ?? ""),
  })

  return (
    <>
      <input
        ref={baseInputRef}
        {...conform.input(field, { hidden: true })}
        onChange={(e) => setDateString(e.target.value)}
        onFocus={() => customInputRef.current?.focus()}
      />
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "h-auto w-full justify-between rounded-xl border-primary/50 px-5 py-3 text-left font-normal text-foreground",
              !date && "text-muted-foreground",
            )}
          >
            {date ? format(date, "dd/MM/yyyy") : <span>Pick a date</span>}
            <CalendarIcon className="h-5 w-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            captionLayout="dropdown-buttons"
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date)
              if (date) {
                control.change(formatISO(date))
              }
            }}
          />
        </PopoverContent>
      </Popover>
    </>
  )
}
