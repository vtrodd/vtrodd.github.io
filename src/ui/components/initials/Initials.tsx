import {MouseEventHandler, useRef, useState} from 'react'
import './Initials.scss'

let swapTimeout: NodeJS.Timeout,
  animTimeout: NodeJS.Timeout

export const Initials = () => {
  const [initial, setInitial] = useState('V')
  const [variation, setVariation] = useState(0)
  const ref = useRef<HTMLButtonElement>(null)

  const restartTimeouts = () => {
    clearTimeout(swapTimeout)
    clearTimeout(animTimeout)

    swapTimeout = setTimeout(() => setInitial(initial === 'V' ? 'T' : 'V'), 300)
    animTimeout = setTimeout(() => {
      ref.current?.removeAttribute('data-spinning')
      const newVariation = Math.floor(Math.random() * 3)
      setVariation(newVariation === variation ? (newVariation + 1) % 3 : newVariation)
    }, 600)
  }

  const onClick: MouseEventHandler = e => {
    restartTimeouts()
    ref.current?.setAttribute('data-spinning', variation.toString())
  }

  return (
    <button id='initials' ref={ref} onClick={onClick}>
      <h1 aria-hidden className='initial'>{initial}</h1>
    </button>
  )
}