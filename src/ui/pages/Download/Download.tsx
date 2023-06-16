import {IDownload} from '../../../types'
import {DownloadButton} from '../../components'
import './Download.scss'

export const Download = ({name, keyed_name, date, description, download_url}: IDownload) => {
  return (
    <>
    <div className='download'>
      <p>{name}</p>
      <div className='horizontal-container'>
        <p>{description}</p>
        <DownloadButton to={download_url} />
      </div>
    </div>
    </>
  )
}