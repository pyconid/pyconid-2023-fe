import { useEffect, useMemo, useRef, useState } from "react"
import { conform, useInputEvent, type FieldConfig } from "@conform-to/react"
import { IKUpload } from "imagekitio-react"

import { getAvatarInitials } from "~/libs/getAvatarInitials"
import { useImagePreview } from "~/hooks/useImagePreview"

import { Button } from "../ui"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useToast } from "../ui/use-toast"

type AvatarUploadProps<T> = {
  field: FieldConfig<T>
  userId: string
  firstName?: string
  lastName?: string
  setUploading: (isUploading: boolean) => void
}

export function AvatarUpload<T>({
  field,
  userId,
  firstName,
  lastName,
  setUploading,
}: AvatarUploadProps<T>) {
  const { toast } = useToast()
  const { preview, setSelectedFile } = useImagePreview()
  const shadowInputRef = useRef<HTMLInputElement>(null)
  const control = useInputEvent({ ref: shadowInputRef })

  const initials = useMemo(() => {
    return getAvatarInitials(firstName, lastName)
  }, [firstName, lastName])

  return (
    <div>
      <div className="relative w-32">
        <Avatar className="relative h-32 w-32">
          <AvatarImage src={preview ?? (field.defaultValue as string)} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <Button
          onClick={() => {
            const uploader = document.getElementById("imagekit-upload")
            if (uploader) {
              uploader.click()
            }
          }}
          className="absolute bottom-0 right-0 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-primary/50 bg-background p-2 hover:bg-background"
          asChild
        >
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 5.25H16.9012L15.6234 3.33375C15.555 3.23114 15.4623 3.147 15.3535 3.08879C15.2448 3.03057 15.1233 3.00007 15 3H9C8.87665 3.00007 8.75522 3.03057 8.64648 3.08879C8.53773 3.147 8.44502 3.23114 8.37656 3.33375L7.09781 5.25H4.5C3.90326 5.25 3.33097 5.48705 2.90901 5.90901C2.48705 6.33097 2.25 6.90326 2.25 7.5V18C2.25 18.5967 2.48705 19.169 2.90901 19.591C3.33097 20.0129 3.90326 20.25 4.5 20.25H19.5C20.0967 20.25 20.669 20.0129 21.091 19.591C21.5129 19.169 21.75 18.5967 21.75 18V7.5C21.75 6.90326 21.5129 6.33097 21.091 5.90901C20.669 5.48705 20.0967 5.25 19.5 5.25ZM20.25 18C20.25 18.1989 20.171 18.3897 20.0303 18.5303C19.8897 18.671 19.6989 18.75 19.5 18.75H4.5C4.30109 18.75 4.11032 18.671 3.96967 18.5303C3.82902 18.3897 3.75 18.1989 3.75 18V7.5C3.75 7.30109 3.82902 7.11032 3.96967 6.96967C4.11032 6.82902 4.30109 6.75 4.5 6.75H7.5C7.62351 6.75008 7.74512 6.71966 7.85405 6.66143C7.96297 6.60321 8.05583 6.51899 8.12438 6.41625L9.40125 4.5H14.5978L15.8756 6.41625C15.9442 6.51899 16.037 6.60321 16.146 6.66143C16.2549 6.71966 16.3765 6.75008 16.5 6.75H19.5C19.6989 6.75 19.8897 6.82902 20.0303 6.96967C20.171 7.11032 20.25 7.30109 20.25 7.5V18ZM12 8.25C11.1842 8.25 10.3866 8.49193 9.70827 8.94519C9.02992 9.39845 8.50121 10.0427 8.189 10.7964C7.87679 11.5502 7.7951 12.3796 7.95426 13.1797C8.11343 13.9799 8.50629 14.7149 9.08318 15.2918C9.66008 15.8687 10.3951 16.2616 11.1953 16.4207C11.9954 16.5799 12.8248 16.4982 13.5786 16.186C14.3323 15.8738 14.9766 15.3451 15.4298 14.6667C15.8831 13.9884 16.125 13.1908 16.125 12.375C16.1238 11.2814 15.6888 10.2329 14.9154 9.45955C14.1421 8.68624 13.0936 8.25124 12 8.25ZM12 15C11.4808 15 10.9733 14.846 10.5416 14.5576C10.1099 14.2692 9.7735 13.8592 9.57482 13.3795C9.37614 12.8999 9.32415 12.3721 9.42544 11.8629C9.52672 11.3537 9.77673 10.886 10.1438 10.5188C10.511 10.1517 10.9787 9.90172 11.4879 9.80044C11.9971 9.69915 12.5249 9.75114 13.0045 9.94982C13.4842 10.1485 13.8942 10.4849 14.1826 10.9166C14.471 11.3483 14.625 11.8558 14.625 12.375C14.625 13.0712 14.3484 13.7389 13.8562 14.2312C13.3639 14.7234 12.6962 15 12 15Z"
                fill="#282828"
              />
            </svg>
          </div>
        </Button>
      </div>
      <input
        ref={shadowInputRef}
        {...conform.input(field, {
          hidden: true,
        })}
      />
      <IKUpload
        className="hidden"
        id="imagekit-upload"
        fileName="avatar"
        folder={`avatars/${userId}`}
        onError={(err) => {
          toast({ variant: "destructive", title: "Error uploading file" })
          setUploading(false)
        }}
        onUploadStart={() => setUploading(true)}
        onChange={(e) => {
          if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
          }
          setSelectedFile(e.target.files[0])
        }}
        onSuccess={(res) => {
          control.change(res.url)
          setUploading(false)
        }}
      />
    </div>
  )
}
