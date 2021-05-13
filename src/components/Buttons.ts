import styled from "styled-components";
import { variant, color, ColorProps } from "styled-system";

const primaryButton = {
  bg: 'brand',
  color: 'onBrand',
  hover: {
    boxShadow: '0px 3px 18px rgba(0, 0, 0, 0.25)'
  }
};

const outLineButton = {
  bg: 'transparent',
  borderStyle: 'solid',
  borderColor: 'brand',
  color: 'brand',
  hover: {
    ...primaryButton,
  }
};

export type ButtonProps = {
  variant?: 'primary' | 'outline';
} & ColorProps;

export const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9px 24px;
  max-height: 42px;
  border-radius: 6px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all .2s linear;

  ${color}
  ${variant({
    variants: {
      primary: primaryButton,
      outline: outLineButton,
    },
  })}

  &:hover {
    ${variant({
    variants: {
      primary: primaryButton.hover,
      outline: outLineButton.hover,
    },
  })}
  }
`;

Button.defaultProps = {
  variant: 'primary'
}