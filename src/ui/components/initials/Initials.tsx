import {MouseEventHandler, useRef, useState} from "react"
import './Initials.scss'

let swapTimeout: NodeJS.Timeout,
  animTimeout: NodeJS.Timeout

export const Initials = () => {
  const [initial, setInitial] = useState('V')
  const [variation, setVariation] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const restartTimeouts = () => {
    clearTimeout(swapTimeout)
    clearTimeout(animTimeout)

    swapTimeout = setTimeout(() => setInitial(initial === 'V' ? 'T' : 'V'), 300)
    animTimeout = setTimeout(() => {
      ref.current?.removeAttribute('data-spinning')
      setVariation(Math.floor(Math.random() * 2))
    }, 600)
  }

  const onClick: MouseEventHandler = e => {
    restartTimeouts()
    ref.current?.setAttribute('data-spinning', variation.toString())
  }

  return (
    <div id='initials' ref={ref} onClick={onClick}>
      <h1 className='initial'>{initial}</h1>
    </div>
  )
}