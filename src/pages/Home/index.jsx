import './styles.scss';
import { Button } from '../../components/Button/index.jsx';
import { Banner } from '../../components/Banner/index.jsx';
import { Card } from '../../components/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerTop from '../../assets/images/home/banner/banner.webp';
import bannerBottom from '../../assets/images/home/banner/banner-bottom.webp';
import rackets from '../../assets/images/home/Rackets.webp';
import balls from '../../assets/images/home/Balls.webp';
import accessories from '../../assets/images/home/Accessories.webp';
import product1 from '../../assets/images/home/products/product1.webp';
import product2 from '../../assets/images/home/products/product2.webp';
import product3 from '../../assets/images/home/products/product3.webp';

export const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
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
      <div className="best-sellers">
        <div className="best-sellers-products">
          <Slider {...settings}>
            <Card
              image={product1}
              description="Wilson Championship Extra Duty Tennis Balls, 3-pk"
              price="$250.00"
            />
            <Card
              image={product2}
              description="Wilson Championship Extra Duty Tennis Balls, 3-pk"
              price="$250.00"
            />
            <Card
              image={product3}
              description="Wilson Championship Extra Duty Tennis Balls, 3-pk"
              price="$250.00"
            />
            <Card
              image={product3}
              description="Wilson Championship Extra Duty Tennis Balls, 3-pk"
              price="$250.00"
            />
          </Slider>
        </div>
        <Button className="home__button">Ver todos</Button>
      </div>
      <div className="categories">
        <Card image={rackets} title="RAQUETAS" />
        <Card image={balls} title="PELOTAS" />
        <Card image={accessories} title="ACCESORIOS" />
      </div>
      <Banner className="banner-bottom" image={bannerBottom}>
        <h1 className="home__title">DESCUBRE TU PASIÓN</h1>
        <Button className="home__button">Comprar ahora</Button>
      </Banner>
    </div>
  );
};
