import {MouseEventHandler, useState} from 'react'
import './Dialog.scss'

type DialogProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Dialog = (props: DialogProps) => {
  const onClose: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== e.currentTarget) return
    props.onClose()
  }
  return (
    <div onClick={onClose} className={`dialog ${props.open ? 'open' : ''}`}>
      <div className='dialog-contents'>
        {props.children}
      </div>
    </div>
  )
}