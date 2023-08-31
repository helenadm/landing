export function SocialLink({ icon: Icon,className:className, ...props }) {
    return (
      <span className="group -m-1 p-1">
        <Icon className={className} />
      </span>
    )
  }