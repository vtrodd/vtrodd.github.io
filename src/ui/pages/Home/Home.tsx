import '@fontsource/noto-sans-mono/700.css';
import './Home.scss';
import meImg from './me.jpg';

export const Home = () => (
  <div id='home'>
    <h2>I'm still working on my site!</h2>
    <h3>Check back soon for more content!</h3>
    <h4><i>In the meantime, check out <a href='https://will.trodd.dev'>my brother's site!</a></i></h4>
  </div>
)

export const HomeMainContent = () => {
  return (
    <div id='home-main-content'>
      <div className='left-side'>
        <img src={meImg} alt='Vic Trodd' />
      </div>

      <div className='right-side'>
        <h1><span>Vic</span><span>Trodd</span></h1>
        <div id='development-carousel'>
          <div id='carousel'>
            <p>Software</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Game</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web</p>
            <p>Software</p>
          </div>
          <div>
            <p>Development</p>
          </div>
        </div>
        <p>Photography</p>
        <p>Music</p>
      </div>
    </div>
  )
}