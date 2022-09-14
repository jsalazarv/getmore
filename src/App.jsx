import './App.scss';
import { Banner } from './components/Banner';
import bannerTop from './assets/images/home/banner/banner.webp';

function App() {
  return (
    <>
      <Banner image={bannerTop} />
    </>
  );
}

export default App;
