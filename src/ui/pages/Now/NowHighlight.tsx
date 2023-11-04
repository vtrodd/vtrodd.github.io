import {useLocation} from 'react-router-dom'
import './NowHighlight.scss'
import {Nows, getDateString} from './Nows'

export const NowHighlight = () => {
  const {pathname} = useLocation()
  const path = pathname.substring(1)
  const active = path === 'now'

  const now = Nows[0]
  
  return (
    <>
      <div className='left-highlight text-highlight'>
        <h1><a tabIndex={active ? 0 : -1} aria-hidden={!active} href='https://nownownow.com'>/now</a></h1>
        <h3 id='update-date'><i>Updated {getDateString(now.date)}</i></h3>
        <div id='update'>
          {now.content}
        </div>
      </div>
      <div className='right-highlight image-highlight'>
        <img src={now.image} alt={now.imageAlt} title={now.imageAlt} />
      </div>
    </>
  )
}