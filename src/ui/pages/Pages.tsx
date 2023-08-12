import {BlogContent, BlogHighlight} from './blog'
import {HomeContent, HomeHighlight} from './home'
import {NowContent, NowHighlight} from './now'

export interface Page {
  name: string
  path: string
  colour: string
  highlight: () => JSX.Element
  content: () => JSX.Element
}

export const Pages: Page[] = [
  {
    name: 'home',
    path: '',
    colour: 'green',
    highlight: HomeHighlight,
    content: HomeContent
  },
  {
    name: 'now',
    path: 'now',
    colour: 'blue',
    highlight: NowHighlight,
    content: NowContent
  },
  {
    name: 'blog',
    path: 'blog',
    colour: 'yellow',
    highlight: BlogHighlight,
    content: BlogContent
  }
]

const styles = document.createElement('style')
document.head.appendChild(styles)
Pages.forEach(page => styles.innerHTML += `[data-page='${page.path}'] {--highlight: var(--${page.colour})}\n`)