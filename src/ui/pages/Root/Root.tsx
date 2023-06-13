import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, REDIRECTS } from '../../pages';
import './Root.scss';

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {REDIRECTS.map((redirect, index) => {
          return <Route key={index} path={redirect.from} element={redirect.component} />
        })}
      </Routes>
    </BrowserRouter>
  );
}