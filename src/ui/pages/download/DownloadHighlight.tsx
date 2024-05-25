import {Route, Routes} from 'react-router-dom'
import {DownloadItem} from './downloadItem/DownloadItem'

export const DownloadHighlight = () => {
  return (
    <Routes>
      <Route path='download' element={<DownloadHighlightInner />} />
      <Route path='download/:keyed_name' element={<DownloadItem />} />
    </Routes>
  )
}

const DownloadHighlightInner = () => {
  return (
    <div id='download-content'>
      <p>This is an empty page...</p>
    </div>
  )
}