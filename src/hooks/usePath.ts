import {useLocation} from 'react-router-dom'
import {Pages} from '../ui'
import {useEffect, useState} from 'react'

export const usePath = () => {
  const [path, setPath] = useState<string[]>([])
  const [pageIndex, setPageIndex] = useState<number>(0)
  const {pathname} = useLocation()

  useEffect(() => {
    const newPath = pathname.split('/').filter(Boolean)
    if (newPath.length === 0) newPath.push('')
    setPath(newPath)
    setPageIndex(Pages.findIndex(page => page.path === newPath[0]))
  }, [pathname])

  return [path, pageIndex] as [string[], number]
}