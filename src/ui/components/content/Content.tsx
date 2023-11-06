import {Page} from '../..'
import {PageCarousel} from '..'
import './Content.scss'

export const Content = () => <PageCarousel element={ContentPrefab} className='for-content' />

const ContentPrefab = (page: Page, currentPath: string) =>
  <div
    key={page.path}
    aria-hidden={page.path !== currentPath}
    className='content-wrapper'
  >
    <div className='content-container'>
      <div id={`${page.name}-content`}>
        <page.content />
      </div>
    </div>
  </div>