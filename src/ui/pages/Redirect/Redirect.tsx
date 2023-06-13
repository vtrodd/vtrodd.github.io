import './Redirect.scss'

interface RedirectProps {
  anchorText: string,
  title: string,
  to: string
}

export const Redirect = ({anchorText, title, to}: RedirectProps) => {
  return (
    <div className="redirect">
      <h1>{title}</h1>
      <p><i><a href={to}>{anchorText}</a></i></p>
    </div>
  )
}