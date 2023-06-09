import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../../pages';
import './Root.scss';

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}