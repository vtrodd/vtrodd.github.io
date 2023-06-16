import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Downloads, Home } from '../../pages';
import './Root.scss';

export const Root = () => {
  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route index element={<Home />} />
        <Route path='downloads' element={<Downloads />} /> {/* This is the same as the index route */}
        <Route path='download/*' element={<Downloads />} />
        <Route path='download/:rootFolder/*' element={<Downloads />} />
        <Route path='downloads/:rootFolder/*' element={<Downloads />} />
      </Routes>
    </BrowserRouter>
  );
}