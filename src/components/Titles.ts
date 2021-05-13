import styled from "styled-components";
import { typography, color} from "styled-system";

const defaultStyle = {
  fontStyle: `normal`,
  color: "title",
};
export const H1 = styled.h1.attrs({
  ...defaultStyle,
})`
  ${typography};
  ${color};
  font-weight: bold;
  font-size: 42px;
  line-height: 48px;
`;

export const H2 = styled.h2.attrs({
  ...defaultStyle,
})`
  ${typography};
  ${color};
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
`;
export const H3 = styled.h3.attrs({
  ...defaultStyle,
})`
  ${typography};
  ${color};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

export const H4 = styled.h4.attrs({
  ...defaultStyle,
})`
  ${typography};
  ${color};
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
`;
