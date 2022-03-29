import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from '../../components';
import { Blog, Home } from '../../pages';
import './Root.scss';

export const Root = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}