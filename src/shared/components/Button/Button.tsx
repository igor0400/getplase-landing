import classNames from 'classnames';
import React, {
  ButtonHTMLAttributes,
  CSSProperties,
  FC,
  ReactNode,
} from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  bgColor?: string;
  borderColor?: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({
  className,
  style,
  children,
  bgColor,
  borderColor,
  onClick,
  ...args
}) => {
  return (
    <button
      className={classNames('uppercase rounded-md py-2.5 px-12 text-sm', {
        [className ?? '']: className,
        border: borderColor,
      })}
      style={{ ...style, background: bgColor }}
      onClick={onClick}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
