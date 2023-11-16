type CommiteeCardProps = React.HTMLAttributes<HTMLDivElement> & {
  firstName: string
  lastName: string
  role: string
  index?: number
  id: string
}

function CommiteeCard({
  firstName,
  lastName,
  index = 0,
  children,
  className,
  id,
}: CommiteeCardProps) {
  return (
    <div className="w-fit space-y-2 rounded-2xl border-2 border-solid border-primary p-4">
      <img src="https://placehold.co/250" alt="" />
      <p>{`${firstName} ${lastName}`}</p>
      <div className=" flex gap-3">
        <img src="icons/github.svg" />
        <img src="icons/x.svg" />
      </div>
    </div>
  )
}

export { CommiteeCard }
