import {useLocation} from 'react-router-dom'
import {Page, Pages} from '../../pages/Pages'

import './PageCarousel.scss'

export type PageCarouselProps = {
  element: (p: Page, c: string) => JSX.Element
}

export const PageCarousel = ({element}: PageCarouselProps) => {
  const {pathname} = useLocation()
  const currentPath = pathname.substring(1)

  const pageIndex = Pages.findIndex(page => page.path === currentPath)
  let translateX = pageIndex * 100

  return (
    <div className='page-carousel-container'>
      <div className='page-carousel' style={{transform: `translateX(-${translateX}%)`}}>
        {Pages.map(page => element(page, currentPath))}
      </div>
    </div>
  )
}