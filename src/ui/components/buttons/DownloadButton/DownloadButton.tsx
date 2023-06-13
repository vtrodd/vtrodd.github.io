import {Download, Save, SaveSharp} from "@mui/icons-material"
import './DownloadButton.scss'

interface DownloadButtonProps {
  to: string
}

export const DownloadButton = ({to}: DownloadButtonProps) => {
  return (
    <div className='download-button'>
      <a href={to}>
        <Download />
        Download
      </a>
    </div>
  );
}