import {Nows, getDateString} from './Nows'
import './NowContent.scss'

export const NowContent = () => {
  const oldNows = Nows.slice(1)
  return (
    <>
      {oldNows.sort((a, b) => a.date.getTime() - b.date.getTime()).map((now, i) => {
        const order = i % 2 === 0
        return (
          <div key={now.date.toString()} className='update'>
            <div className={`update-text ${order ? 'update-right' : 'update-left'}`}>
              <h3 id='update-date'><i>Update from {getDateString(now.date)}</i></h3>
              <div>
                {now.content}
              </div>
            </div>
            <div className={`update-image ${order ? 'update-left' : 'update-right'}`}>
              <img src={now.image} alt={now.imageAlt} title={now.imageAlt} />
            </div>

          </div>
        )
      })}
    </>
  )
}