import {MouseEventHandler, useEffect, useRef} from 'react'
import './MouseFollowEffect.scss'

let clickedTimeout: NodeJS.Timeout

export const MouseFollowEffect = () => {
  const ref = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: MouseEvent) => {
    if (!ref.current) return

    ref.current.animate({
      top: `${e.clientY}px`,
      left: `${e.clientX}px`,
    }, {duration: 1500, fill: 'forwards', easing: 'ease-in-out'})

  }

  const onClick = (e: MouseEvent) => {
    if (!ref.current) return
    ref.current.removeAttribute('data-clicked')
    clearTimeout(clickedTimeout)
    ref.current.setAttribute('data-clicked', 'true')
    clickedTimeout = setTimeout(() => ref.current?.removeAttribute('data-clicked'), 500)
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div className="mouse-follow-effect" ref={ref}>
      <div className="mouse-follow-effect__circle"></div>
    </div>
  )
}