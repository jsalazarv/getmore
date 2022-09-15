import './styles.scss';
import { Button } from '../../components/Button/index.jsx';
import { Banner } from '../../components/Banner/index.jsx';
import bannerTop from '../../assets/images/home/banner/banner.webp';
import bannerBottom from '../../assets/images/home/banner/banner-bottom.webp';

export const Home = () => {
  return (
    <div className="home">
      <Banner className="banner-top" image={bannerTop}>
        <h1 className="home__title">EL MEJOR DEPORTE</h1>
        <p className="banner-top__paragraph">
          Lorem Ipsum is simply dummy text of the <br /> printing and
          typesetting industry.
        </p>
        <Button className="home__button">Comprar ahora</Button>
      </Banner>
      <Banner className="banner-bottom" image={bannerBottom}>
        <h1 className="home__title">DESCUBRE TU PASIÓN</h1>
        <Button className="home__button">Comprar ahora</Button>
      </Banner>
    </div>
  );
};
