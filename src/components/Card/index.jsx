import './styles.scss';

export const Card = ({
  image,
  title,
  description = '',
  price = '',
  className,
}) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img className="card-image" src={image} alt="" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <span className="card-price">{price}</span>
    </div>
  );
};
