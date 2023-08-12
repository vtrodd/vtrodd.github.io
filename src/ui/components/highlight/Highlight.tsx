import {Page} from '../..'
import {PageCarousel} from '..'
import './Highlight.scss'

export const Highlight = () => <PageCarousel element={HighlightPrefab} />

const HighlightPrefab = (page: Page, currentPath: string) =>
  <div
    key={page.path}
    aria-hidden={page.path !== currentPath}
    className='highlight-wrapper'
    style={{['--highlight-background-colour' as any]: `var(--${page.colour})`}}
  >
    <div className='highlight-container'>
      <div id={`${page.name}-highlight`}>
        <page.highlight />
      </div>
    </div>
  </div>