import './styles.scss';
import bannerTop from '../../assets/images/home/banner/banner.webp';
import { Button } from '../../components/Button/index.jsx';
import { Banner } from '../../components/Banner/index.jsx';

export const Home = () => {
  return (
    <div className="home">
      <Banner className="banner-top" image={bannerTop}>
        <h1 className="banner-top__title">EL MEJOR DEPORTE</h1>
        <p className="banner-top__paragraph">
          Lorem Ipsum is simply dummy text of the <br /> printing and
          typesetting industry.
        </p>
        <Button className="banner-top__button">Comprar ahora</Button>
      </Banner>
    </div>
  );
};
