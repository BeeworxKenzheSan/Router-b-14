import styled from "styled-components";
import { AppTitle } from "../components/UI/Title";
import { NavLink, Outlet } from "react-router-dom";
import { ROUTES } from "../routes/AppRoutes";

export const Courses = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledUl>
            <li>
              <StyledNavlink to={ROUTES.MATERILS}>Materials</StyledNavlink>
            </li>
            <li>
              <StyledNavlink to={ROUTES.STUDENTS}>Students</StyledNavlink>
            </li>
            <li>
              <StyledNavlink to={ROUTES.RAITINGS}>Raitings</StyledNavlink>
            </li>
          </StyledUl>
        </nav>
      </header>
      <AppTitle>Courses</AppTitle>
      <section>
        <Outlet />
      </section>
    </div>
  );
};
const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  > li {
    margin-bottom: 15px;
  }
`;

const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 20px;
  display: flex;
  &:hover {
    background-color: white;
    color: black;
  }
  &.active {
    background-color: #e3cff2;
  }
`;
