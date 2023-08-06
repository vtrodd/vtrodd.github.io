import {HomeMainContent} from '../../pages/Home/Home';
import {NowMainContent} from '../../pages/Now/Now';
import './MainContentWrapper.scss';

export const MainContentWrapper = () => {
  return (
    <div id='main-content-wrapper'>
      <MainContentPrefab page='/'>
        <HomeMainContent />
      </MainContentPrefab>

      <MainContentPrefab page='/now'>
        <NowMainContent />
      </MainContentPrefab>

      <MainContentPrefab page='/gallery'>

      </MainContentPrefab>
    </div>
  );
}

const MainContentPrefab = ({children, page}: {children: React.ReactNode, page: string}) => {
  return (
    <div className='main-content' data-page={page}>
      {children}
    </div>
  );
}