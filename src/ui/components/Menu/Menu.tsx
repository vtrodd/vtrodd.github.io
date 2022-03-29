import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDevice } from '../../../hooks'
import './Menu.scss'
import { NameBadge } from './NameBadge/NameBadge'

export const Menu = () => {
  const { mobile, width } = useDevice()
  const headerClass = (width < 815 || mobile) ? 'mobile' : width < 1112 ? 'big-mobile' : ''

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
    <header className={headerClass + (isMobileMenuOpen ? ' open' : '')}>
      <NameBadge />
      <nav>
        <ul className={`menu`}>
          <li><NavLink to='/'><h2>🏡</h2><h2>Home</h2></NavLink></li>
          <li><NavLink to='/blog'><h2>📖</h2><h2>Blog</h2></NavLink></li>
          <li><NavLink to='/work'><h2>💼</h2><h2>Projects</h2></NavLink></li>
          <li><NavLink to='/photos'><h2>📸</h2><h2>Photos</h2></NavLink></li>
        </ul>
      </nav>
      <span className='mobile-button' onClick={() => setIsMobileMenuOpen(c => !c)}>
        <span className={isMobileMenuOpen ? 'open' : ''} />
        <span className={isMobileMenuOpen ? 'open' : ''} />
      </span>
    </header>
    {headerClass === 'mobile' && <span className='mobile-spacer' />}
    </>
  )
}