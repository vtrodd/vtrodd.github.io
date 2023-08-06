import './Now.scss'
import grad from './grad.jpg'
import '@fontsource/noto-sans-mono/700.css'

export const Now = () => (
  <div id='now'>
    <h2>This is where I'd put all my previous updates</h2>
    <h4>IF I HAD ANY</h4>
  </div>
)

export const NowMainContent = () => {
  return (
    <div id='now-main-content'>
      <div className='left-side'>
        <h1><a href='https://nownownow.com'>/now</a></h1>

        <h2><i>Updated 6th August 2023</i></h2>

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

      <div className='right-side'>
        <img src={grad} alt='Myself on graduation day' />
      </div>
    </div>
  )
}