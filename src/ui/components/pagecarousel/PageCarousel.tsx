import {Page, Pages} from '../../pages/Pages'
import {usePath} from '../../../hooks/usePath'

import './PageCarousel.scss'

export type PageCarouselProps = {
  element: (p: Page, c: string) => JSX.Element,
  className?: string
}

export const PageCarousel = ({element, className}: PageCarouselProps) => {
  const [path, pageIndex] = usePath()
  let translateX = pageIndex * 100
  const classes = (path.length > 1) ? 'minimised' : ''

  return (
    <div className={`page-carousel-container ${className} ${classes}`}>
      <div className='page-carousel' style={{transform: `translateX(-${translateX}%)`}}>
        {Pages.map(page => element(page, path[0]))}
      </div>
    </div>
  )
}