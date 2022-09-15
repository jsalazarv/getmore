import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import footerImage from '../../assets/images/home/banner/ball.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-networks">
        <FontAwesomeIcon className="icon" icon={faInstagram} />
        <FontAwesomeIcon className="icon" icon={faFacebookF} />
      </div>
      <div className="rights-reserved">
        © DEV. All Rights Reserved.&nbsp;
        <a href="#">Privacy Policy</a>,&nbsp;
        <a href="#">Terms</a> &&nbsp;
        <a href="#">Conditions</a>
      </div>
      <div className="footer-image">
        <img src={footerImage} alt="" />
      </div>
    </footer>
  );
};
