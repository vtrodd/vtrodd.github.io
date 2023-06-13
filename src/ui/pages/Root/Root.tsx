import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, DOWNLOADS } from '../../pages';
import './Root.scss';

export const Root = () => {
  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route index element={<Home />} />
        {DOWNLOADS.map((download, index) => {
          return <Route key={index} path={download.from} element={download.component} />
        })}
      </Routes>
    </BrowserRouter>
  );
}