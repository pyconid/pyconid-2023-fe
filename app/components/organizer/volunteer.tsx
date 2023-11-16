type VolunteerCardProps = React.HTMLAttributes<HTMLDivElement> & {
  firstName: string
  lastName: string
  index?: number
  id: string
}

function VolunteerCard({
  firstName,
  lastName,
  index = 0,
  children,
  className,
  id,
}: VolunteerCardProps) {
  return (
    <div className="red w- flex w-fit gap-3 space-y-2 rounded-2xl border-2 border-solid border-primary p-4">
      <img src="https://placehold.co/60" alt="" />
      <div className="w-44 space-y-2">
        <p>{`${firstName} ${lastName}`}</p>
        <div className=" flex gap-3">
          <img src="icons/github.svg" />
          <img src="icons/x.svg" />
        </div>
      </div>
    </div>
  )
}

export { VolunteerCard }
