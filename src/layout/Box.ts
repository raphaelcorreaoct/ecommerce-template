import styled from 'styled-components';
import {
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  color,
  ColorProps,
  compose,
  grid,
  GridProps,
  gridGap,
  GridGapProps,
  border,
  BorderProps,
  zIndex, 
  ZIndexProps
} from 'styled-system';

const boxProps = compose(
  space,
  color,
  layout,
  flexbox,
  position,
  grid,
  gridGap,
  border,
  zIndex,
);

export type BoxProps = FlexboxProps &
  SpaceProps &
  LayoutProps &
  PositionProps &
  GridProps &
  GridGapProps &
  BorderProps &
  ZIndexProps &
  ColorProps;

export const Box = styled.div<BoxProps>`
  ${boxProps}
`;
