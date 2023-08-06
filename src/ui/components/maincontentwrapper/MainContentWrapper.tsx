import {HomeMainContent} from '../../pages/Home/Home';
import {NowMainContent} from '../../pages/Now/Now';
import './MainContentWrapper.scss';

export const MainContentWrapper = () => {
  return (
    <div id='main-content-wrapper'>
      <div className='main-content' data-page='/'>
        <HomeMainContent />
      </div>

      <div className='main-content' data-page='/now'>
        <NowMainContent />
      </div>

      <div className='main-content' data-page='/gallery'>

      </div>
    </div>
  );
}