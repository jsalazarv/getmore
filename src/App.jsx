import './App.scss';
import { Banner } from './components/Banner';
import bannerTop from './assets/images/home/banner/banner.webp';
import { Button } from './components/Button';

function App() {
  return (
    <>
      <Banner image={bannerTop}>
        <Button>Comprar ahora</Button>
      </Banner>
    </>
  );
}

export default App;
