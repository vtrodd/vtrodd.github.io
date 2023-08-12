import {useLocation} from 'react-router-dom'
import {Navbar, Initials, ThemeButton} from '..'
import {Pages} from '../..'
import './Header.scss'


export const Header = () => {
  const {pathname} = useLocation()
  const path = pathname.substring(1)

  const pageIndex = Pages.findIndex(page => page.path === path)
  let translateX = pageIndex * 100

  return (
    <header>
      <div className='bar'>
        <Initials />
        <Navbar />
        <ThemeButton />
      </div>

      <div className='background-colour-banners' style={{transform: `translateX(-${translateX}%)`}}>
        {
          Pages.map((page) => (
            <div
              key={page.path}
              className='banner'
              style={{
                ['--highlight-background-colour' as any]: `var(--${page.colour})`
              }}
            />
          ))}
      </div>
    </header>
  )
}