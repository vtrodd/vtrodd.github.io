import { BrowserRouter } from 'react-router-dom';
import { Menu } from '../../components';
import './Root.scss';

export const Root = () => {
  return (
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  );
}