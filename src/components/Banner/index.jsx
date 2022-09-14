import './styles.scss';

export const Banner = ({ className, image = '', children }) => {
  return (
    <div
      className={`banner ${className}`}
      style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  );
};
