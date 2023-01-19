import cn from 'classnames';
import Link from 'next/link';
import { ButtonHTMLAttributes, ComponentProps, FC } from 'react';
import styles from './Button.module.scss';

type Props =
  | ({
      isLink?: false;
    } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      isLink: true;
    } & ComponentProps<typeof Link>);

const Button: FC<Props> = ({
  isLink = false,
  className,
  children,
  ...props
}) => {
  const Component: any = isLink ? Link : 'button';

  return (
    <Component className={cn(className, styles.button)} {...props}>
      {children}
    </Component>
  );
};

export default Button;
