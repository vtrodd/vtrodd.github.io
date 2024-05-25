import {useParams} from 'react-router-dom'
import './DownloadItem.scss'
import DOWNLOADS from '../../../../downloads.json'

export const DownloadItem = () => {
  const {keyed_name} = useParams()
  const set = DOWNLOADS.find(set => set.items.find(item => item.keyed_name === keyed_name))
  if (!set) return <div>Download not found</div>

  const item = set.items.find(item => item.keyed_name === keyed_name)
  if (!item) return <div>Download not found</div>

  const date = new Date(item.date)

  return (
    <div className='download-item'>
      <h1>{item.name}</h1>
      <div>
        <h3>{item.description}</h3>
        <p><i>{date.toDateString()}</i></p>
      </div>
      <a href={item.download_url} download>
        <button><b>Download</b></button>
      </a>
    </div>
  )
}