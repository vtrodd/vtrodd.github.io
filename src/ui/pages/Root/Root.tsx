import {BrowserRouter, Routes, Route, Outlet, useLocation} from 'react-router-dom';
import './Root.scss';
import {Navbar} from '../../components/navbar/Navbar';

import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/600.css';
import {useLocalStorage, useMediaQuery} from 'usehooks-ts';
import {Home} from '../Home/Home';
import {Now} from '../Now/Now';


export const Root = () => {
  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route element={<NavLayout />}>
          <Route element={<Home />}>
            <Route path='*' />
          </Route>
          <Route path='now' element={<Now />} />
          <Route path='gallery' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const NavLayout = () => {
  const {pathname} = useLocation();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useLocalStorage<'dark' | 'light'>('theme', prefersDarkMode ? 'dark' : 'light');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div id='page-with-navbar' data-page={pathname} data-theme={theme}>
      <Navbar onToggleTheme={toggleTheme} />
      <Outlet />
    </div>
  )
}