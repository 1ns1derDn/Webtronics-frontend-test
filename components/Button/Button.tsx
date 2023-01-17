import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { FCWithChildren } from 'types/react';
import styles from './Button.module.scss';

const Button: FCWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button className={cn(className, styles.button)} {...props}>
      {children}
    </button>
  );
};

export default Button;
