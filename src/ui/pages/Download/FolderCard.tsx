import {IDownload, IFolder, IItem} from "../../../types";
import {DownloadButton} from "../../components";
import {Download} from "./Download";

const isDownload = (download: IItem): download is IDownload => {
  return (download as IDownload).download_url !== undefined
}

export const FolderCard = (folder: IFolder) => {
  let items = folder.items?.filter(isDownload) as IDownload[]
  if (folder.items === undefined || folder.items.length === 0)
    return <></>

  items = items.sort((a, b) => {
    return a.date > b.date ? -1 : 1
  })

  return (
    <div className='folder'>
      <h2>{folder.name}</h2>
      <div className='download-list'>
        {items.map((download, i) => {
          return (
            <Download {...download} key={i} />
          )
        })}
      </div>
    </div>
  )
}