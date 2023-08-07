import {HomeMainContent} from '../../pages/Home/Home';
import {NowMainContent} from '../../pages/Now/Now';
import './MainContentWrapper.scss';

export const MainContentWrapper = () => {
  return (<div id='test'>
    <div id='main-content-background-colours'>
      <div>
        <div>
          <span data-page='/' />
          <span data-page='/now' />
          <span data-page='/blog' />
        </div>
      </div>
    </div>
    <div id='main-content-wrapper'>
      <MainContentPrefab page='/'>
        <HomeMainContent />
      </MainContentPrefab>

      <MainContentPrefab page='/now'>
        <NowMainContent />
      </MainContentPrefab>

      <MainContentPrefab page='/blog'>

      </MainContentPrefab>
    </div >
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