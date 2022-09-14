import './styles.scss';

export const Button = ({
  style = 'default',
  className,
  children,
  ...props
}) => {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
};
