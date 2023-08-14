import {Navbar, Initials, ThemeButton} from '..'
import {Pages} from '../..'
import './Header.scss'
import {usePath} from '../../../hooks/usePath'


export const Header = () => {
  const [, pageIndex] = usePath()
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