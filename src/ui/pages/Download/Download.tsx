import {DownloadButton} from '../../components'
import './Download.scss'

interface DownloadProps {
  title: string,
  text?: string,
  to: string
}

export const Download = ({title, text, to}: DownloadProps) => {
  return (
    <div className='download'>
      <h1>{title}</h1>
      <div className='horizontal-container'>
        <p>{text}</p>
        <DownloadButton to={to} />
      </div>
    </div>
  )
}