import {MouseEventHandler, useEffect, useRef} from 'react'
import './MouseFollowEffect.scss'

export const MouseFollowEffect = () => {
  const ref = useRef<HTMLDivElement>(null)

  const onMouseMove = (x: MouseEvent) => {
    if (ref.current) {
      ref.current.animate({
        top: `${x.clientY}px`,
        left: `${x.clientX}px`
      }, {duration: 1000, fill: 'forwards', easing: 'ease-in-out'})
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div className="mouse-follow-effect" ref={ref}>
      <div className="mouse-follow-effect__circle"></div>
    </div>
  )
}