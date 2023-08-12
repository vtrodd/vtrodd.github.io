import {useLocation} from 'react-router-dom'
import './HomeContent.scss'

export const HomeContent = () => {
  const {pathname} = useLocation()
  const path = pathname.substring(1)
  const active = path === ''
  
  return (
    <div>
      <h2>I'm still working on my site!</h2>
      <h3>Check back soon for more content!</h3>
      <h4><i>In the meantime, check out <a tabIndex={active ? 0 : -1} href='https://will.trodd.dev'>my brother's site!</a></i></h4>
    </div>
  )
}