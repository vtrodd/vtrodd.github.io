import {useLocation} from 'react-router-dom'
import './NowHighlight.scss'
import grad from './grad.jpg'

export const NowHighlight = () => {
  const {pathname} = useLocation()
  const path = pathname.substring(1)
  const active = path === 'now'
  
  return (
    <>
      <div className='left-highlight text-highlight'>
        <h1><a tabIndex={active ? 0 : -1} aria-hidden={!active} href='https://nownownow.com'>/now</a></h1>
        <h3 id='update-date'><i>Updated 6th August 2023</i></h3>
        <div id='update'>
          <h4>/life</h4>
          <ul>
            <li><i>I graduated from the University of York</i></li>
            <li><i>I am applying for many jobs</i></li>
            <li><i>Though I have also applied for a master's...</i></li>
          </ul>

          <h4>/misc</h4>
          <ul>
            <li><i>I've been getting back into Overwatch</i></li>
            <li><i>I'm going to the BBC Proms soon!</i></li>
          </ul>

          <h4>/books</h4>
          <ul>
            <li><i>The Time Traveller's Guide to Medieval England</i></li>
            <li><i>The Old Man and The Sea</i></li>
            <li><i>Dracula</i></li>
          </ul>
        </div>
      </div>
      <div className='right-highlight image-highlight'>
        <img src={grad} alt='A picture of Vic on the day of his graduation' />
      </div>
    </>
  )
}