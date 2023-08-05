import {BrowserRouter, Link, Routes, Route, Outlet} from 'react-router-dom';
import {Hoverbomb} from '../../components/hoverbomb/Hoverbomb';
import {Experiment} from '../Experiments/Experiment/Experiment';
import {Experiments} from '../Experiments/Experiments';
import './Root.scss';
import {Home} from '@mui/icons-material';
import {Construction} from '../Construction/Construction';

export const Root = () => {
  return (
    <>
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>

        <Routes>
          <Route element={<NavLayout />}>
            <Route path='/home' element={<Home />} />
            <Route path='about' element={<div>About Me</div>} />
            <Route path='experiments' element={<Experiments />} />
            <Route path='gallery' element={<div>Gallery</div>} />
            <Route path='blog' element={<div>Blog</div>} />
          </Route>
          <Route path='experiments/:keyedName' element={<Experiment />} />
          <Route path='' element={<Construction />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const NavLayout = () => (
  <>
    <header>
      <nav>
        <ul>
          <li><Link to='/'><Hoverbomb>Home</Hoverbomb></Link></li>
          <li><Link to='/about'><Hoverbomb>About Me</Hoverbomb></Link></li>
          <li><Link to='/experiments'><Hoverbomb>Experiments</Hoverbomb></Link></li>
          <li><Link to='/gallery'><Hoverbomb>Gallery</Hoverbomb></Link></li>
          <li><Link to='/blog'><Hoverbomb>Blog</Hoverbomb></Link></li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </>
)