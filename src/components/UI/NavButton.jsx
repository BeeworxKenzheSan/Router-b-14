import { Link } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export const NavButton = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

const StyledLink = styled(Link)``;
