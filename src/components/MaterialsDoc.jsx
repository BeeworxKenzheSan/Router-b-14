import { NavButton } from "./UI/NavButton";
import { ROUTES } from "../routes/AppRoutes";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const MaterialsDoc = () => {
  const store = useSelector((state) => state.materials.materials);

  return (
    <div>
      <NavButton to={`${ROUTES.CREATE}`}>Add Materials</NavButton>
      <div>
        {store.map((item) => {
          return (
            <StyledDiv key={item.id}>
              <p>{item.name}</p>
              <StyledLink to={`${ROUTES.UPDATE}/${item.id}`}>
                Details
              </StyledLink>
            </StyledDiv>
          );
        })}
      </div>
    </div>
  );
};

const StyledDiv = styled.div`
  display: flex;
  background-color: rebeccapurple;
  color: white;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  background-color: aqua;
  padding: 5px;
  border-radius: 8px;
  &:hover {
    background-color: #84a2a2;
  }
`;
