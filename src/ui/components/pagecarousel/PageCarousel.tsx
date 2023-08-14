import {Page, Pages} from '../../pages/Pages'
import {usePath} from '../../../hooks/usePath'

import './PageCarousel.scss'

export type PageCarouselProps = {
  element: (p: Page, c: string) => JSX.Element
}

export const PageCarousel = ({element}: PageCarouselProps) => {
  const [path, pageIndex] = usePath()
  let translateX = pageIndex * 100

  return (
    <div className='page-carousel-container'>
      <div className='page-carousel' style={{transform: `translateX(-${translateX}%)`}}>
        {Pages.map(page => element(page, path[0]))}
      </div>
    </div>
  )
}