import './Downloads.scss'
import data from '../../../downloads.json'
import {IFolder} from '../../../types'
import {FolderCard} from './FolderCard'
import {useParams} from 'react-router-dom'
const DATA = data as IFolder[]

export const Downloads = () => {
  const {rootFolder} = useParams<{rootFolder?: string}>();
  const rootFolderObject = rootFolder ? DATA.find(folder => folder.keyed_name === rootFolder) : undefined;
  const _data = rootFolderObject ? [rootFolderObject] : DATA;


  return (
    <>
      <div className='downloads'>
        <h1>Downloads</h1>
        <div className='folder-grid'>
          {_data.map((folder, i) => (
            <FolderCard {...folder} key={i} />
          ))}
        </div>
      </div>
      <div className='bg-texture' />
      </>
      )
}