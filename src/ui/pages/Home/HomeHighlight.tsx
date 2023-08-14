import './HomeHighlight.scss'
import meImg from './me.jpg'

export const HomeHighlight = () =>
  <>
    <div className='left-highlight image-highlight'>
      <img src={meImg} alt='Vic Trodd' />
    </div>

    <div className='right-highlight text-highlight'>
      <h1>Vic Trodd</h1>
      <div id='development-carousel'>
        <div id='carousel' aria-hidden>
          <h2>Software</h2>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;Game</h2>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web</h2>
          <h2>Software</h2>
        </div>
        <div>
          <h2 aria-label='Software, Game, and Web Development'>&nbsp;Development</h2>
        </div>
      </div>
      <h2>Photography</h2>
      <h2>Music</h2>
    </div>
  </>
