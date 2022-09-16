import './styles.scss';

export const Card = ({ image, title, className }) => {
  return (
    <div className="card">
      <img className="card-image" src={image} alt="" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
};
