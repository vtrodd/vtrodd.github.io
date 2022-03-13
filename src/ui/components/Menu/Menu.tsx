import { NavLink } from 'react-router-dom'
import './Menu.scss'
import { NameBadge } from './NameBadge/NameBadge'

export const Menu = () => {
  return (
    <header>
      <NameBadge />
      <nav>
        <ul className={`menu`}>
          <li><NavLink to='/'><h2>🏡</h2><h2>Home</h2></NavLink></li>
          <li><NavLink to='/blog'><h2>📖</h2><h2>Blog</h2></NavLink></li>
          <li><NavLink to='/work'><h2>💼</h2><h2>Projects</h2></NavLink></li>
          <li><NavLink to='/photos'><h2>📸</h2><h2>Photos</h2></NavLink></li>
        </ul>
      </nav>
      <h2></h2>
    </header>
  )
}