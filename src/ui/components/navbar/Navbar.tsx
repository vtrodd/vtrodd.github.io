import {Link, useLocation} from "react-router-dom";
import './Navbar.scss';
import {ThemeButton} from "./themebutton/ThemeButton";
import {MainContentWrapper} from "../maincontentwrapper/MainContentWrapper";
import {Initials} from "../initials/Initials";

type NavbarProps = {
  onToggleTheme: () => void;
}

export const Navbar = ({onToggleTheme}: NavbarProps) => {
  const {pathname} = useLocation();

  return (
    <div id='navbar'>
      <div id='navbar-background-colours' data-page={pathname}>
        <span data-page='/' />
        <span data-page='/now' />
        <span data-page='/blog' />
      </div>
      <header>
        <nav>
          <Initials />
          <ul>
            <li><LinkPrefab to='/' pathname={pathname}>Home</LinkPrefab></li>
            <li><LinkPrefab to='/now' pathname={pathname}>Now</LinkPrefab></li>
            <li><LinkPrefab to='/blog' pathname={pathname}>Blog</LinkPrefab></li>
          </ul>
        </nav>

        <ThemeButton onClick={onToggleTheme} />
      </header>
      <MainContentWrapper />
    </div>
  );
}

const LinkPrefab = ({to, pathname, children}: {to: string, pathname: string, children: React.ReactNode}) => (
  <Link to={to} data-to={to} data-active={pathname === to}>{children}</Link>
)