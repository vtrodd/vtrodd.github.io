import {Link, useLocation} from "react-router-dom";
import './Navbar.scss';
import {ThemeButton} from "./themebutton/ThemeButton";
import {MainContentWrapper} from "../maincontentwrapper/MainContentWrapper";

type NavbarProps = {
  onToggleTheme: () => void;
}

export const Navbar = ({onToggleTheme}: NavbarProps) => {
  const {pathname} = useLocation();

  return (
    <div id='navbar'>
      <header>
        <nav>
          <ul>
            <li><LinkPrefab to='/' pathname={pathname}>Home</LinkPrefab></li>
            <li><LinkPrefab to='/now' pathname={pathname}>Now</LinkPrefab></li>
            {/* <li><LinkPrefab to='/gallery' pathname={pathname}>Gallery</LinkPrefab></li> */}
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