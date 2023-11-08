import { useRef } from "react"
import { useRouteLoaderData } from "@remix-run/react"
import { conform, useInputEvent, type FieldConfig } from "@conform-to/react"
import ReCAPTCHA from "react-google-recaptcha"

export type captchaType<T> = {
  field: FieldConfig<T>
}
const Captcha = <T,>({ field }: captchaType<T>) => {
  const { ENV } = useRouteLoaderData("root")

  const shadowInputRef = useRef<HTMLInputElement>(null)
  const control = useInputEvent({
    ref: shadowInputRef,
  })
  return (
    <>
      <ReCAPTCHA
        sitekey={ENV.CAPTCHA_KEY}
        onChange={(value) => control.change(value ?? "")}
      />
      <input
        ref={shadowInputRef}
        {...conform.input(field, {
          hidden: true,
        })}
      />
      {field.error ? (
        <p
          className="text-sm text-red-500 md:h-4 md:text-base"
          id={field.errorId}
        >
          {field.error}
        </p>
      ) : null}
    </>
  )
}

export { Captcha }
