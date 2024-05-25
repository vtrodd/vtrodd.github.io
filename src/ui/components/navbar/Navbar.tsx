import {Link, useLocation} from 'react-router-dom'
import {Page, Pages} from '../..'
import './Navbar.scss'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        {Pages.slice(0, -1).map(NavItem)}
      </ul>
    </nav>
  )
}

const NavItem = (page: Page) => {
  const {pathname} = useLocation()
  const path = pathname.split('/')[1]

  return (
    <li key={page.path} data-active={path === page.path} data-page={page.path}>
      <Link to={page.path}>{page.name}</Link>
    </li>
  )
}