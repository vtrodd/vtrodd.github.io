import './Now.scss'
import grad from './grad.jpg'

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

        <h3><i>Updated Sunday 6th August 2023</i></h3>

        <ul>
          <li>I graduated from the University of York.</li>
          <li>I am applying for many jobs.</li>
          <li>Though I have also applied for a master's...</li>
          <li>Web development has destroyed my sleep schedule.</li>
          <br />
          <li>I'm going to the BBC Proms later this month!</li>
          <li>
            I finally opened Overwatch 2 for the first time ever and I miss playing with my university team &lt;3
          </li>
          <br />
          <li>I recently read Dracula, and I'm about 10% through The Time Traveller's Guide to Medieval England. Dracula is a must-read if you haven't read it!</li>

        </ul>
      </div>

      <div className='right-side'>
        <img src={grad} alt='Myself on graduation day' />
      </div>
    </div>
  )
}