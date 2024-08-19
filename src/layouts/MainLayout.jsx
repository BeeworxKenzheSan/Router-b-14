import { NavLink, Outlet } from "react-router-dom";
import { ROUTES } from "../routes/AppRoutes";
import styled from "styled-components";

export const MainLayout = () => {
  return (
    <Wrapper>
      <NavBar>
        <StyledUl>
          <li>
            <StyledNavlink to={ROUTES.COURSES}>Courses</StyledNavlink>
          </li>
          <li>
            <StyledNavlink to={ROUTES.ANOUNCEMENT}>Anounsment</StyledNavlink>
          </li>
          <li>
            <StyledNavlink to={ROUTES.NOTIFICAIONS}>Notification</StyledNavlink>
          </li>
          <li>
            <StyledNavlink to={ROUTES.SCHEDULE}>Schedule</StyledNavlink>
          </li>
        </StyledUl>
      </NavBar>

      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const NavBar = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 230px;
  padding: 25px;
  background-color: #e5e4de;
  z-index: 1000;
`;
const Main = styled.main`
  padding-left: 235px;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
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
