import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export const AppTitle = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.p`
  font-size: 22px;
`;
