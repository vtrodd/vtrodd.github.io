import {useNavigate} from "react-router-dom";
import './DialSplashPage.scss'
import {MouseEventHandler, useEffect} from "react";
import {AutoStories, Person, Science} from "@mui/icons-material";
import {Clock} from "../../../components/clock/Clock";


export const DialSplashPage = () => {
  useEffect(() => {
    window.onmousemove = (e) => {
      const dial = document.getElementById('dial')
      if (!dial) return

      const x = e.clientX
      const y = e.clientY
      const rect = dial.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const deg = Math.min(Math.max(((Math.atan2(y - cy, x - cx)) * 180 / Math.PI + 135), 135), 225)

      dial.animate({
        transform: `rotate(${deg}deg)`
      }, {
        duration: 100,
        fill: 'forwards'
      })
    }

    return () => {
      window.onmousemove = null
    }
  }, [])

  const dialColourChange = () => {
    const dial = document.getElementById('dial')
    const dialIndicator = document.getElementById('dial-indicator')
    const clock = document.getElementById('clock')
    const icons = document.getElementsByClassName('splash__icon')

    const colours = ['red', 'green', 'yellow', 'orange', 'purple'].filter(colour => colour !== dial?.style.getPropertyValue('--dial-colour'))
    const colour = colours[Math.floor(Math.random() * colours.length)]

    dial?.style.setProperty('--dial-colour', colour)
    dialIndicator?.style.setProperty('--dial-colour', colour)
    clock?.style.setProperty('--dial-colour', colour)
    for (let icon in icons) {
      if (icons.hasOwnProperty(icon)) {
        // @ts-ignore
        icons[icon].style.setProperty('--dial-colour', colour)
      }
    }
  }

  return (
    <div id='dial-splash-page'>
      <Clock />
      <div className='splash'>
        <div onClick={dialColourChange} id='dial' className='dial'>
          <div className='dial__inner' />
          <div id='dial-indicator' className='dial__indicator' />
        </div>

        <a><Person className='splash__icon' /></a>
        <a><AutoStories className='splash__icon' /></a>
        <a><Science className='splash__icon' /></a>

      </div>
    </div>
  );
}