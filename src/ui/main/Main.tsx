import {BrowserRouter, useLocation} from 'react-router-dom'
import {Content, Header, Highlight} from '../components'
import {useLocalStorage, useMediaQuery} from 'usehooks-ts'
import {useEffect} from 'react'
import './Main.scss'
import './Themes.scss'

import '@fontsource/noto-sans'
import '@fontsource/noto-sans/600.css'
import '@fontsource/noto-sans-mono'
import '@fontsource/noto-sans-mono/700.css'

export const Main = () => {
  return (
    <>
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <PageWrapper>
          <Header />
          <Highlight />
          <Content />
        </PageWrapper>
      </BrowserRouter>
    </>
  )
}

const PageWrapper = ({children}: {children: React.ReactNode}) => {
  const {pathname} = useLocation()

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [theme] = useLocalStorage<'dark' | 'light'>('theme', prefersDarkMode ? 'dark' : 'light')
  useEffect(() => document.getElementById('root')?.setAttribute('data-theme', theme), [theme])

  return (
    <div id='page-wrapper' data-page={pathname.substring(1)}>
      {children}
    </div>
  )
}