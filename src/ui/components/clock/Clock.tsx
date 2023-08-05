import {useEffect, useState} from "react"
import "./Clock.scss"

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  })

  return (
    <div id="clock">
      <div id="clock-time">
        {time.toLocaleTimeString()}
      </div>
      <div id="clock-date">
        <span>{DAYS[time.getDay()]}</span>
        <span>{time.toLocaleDateString()}</span>
      </div>
    </div>
  )
}