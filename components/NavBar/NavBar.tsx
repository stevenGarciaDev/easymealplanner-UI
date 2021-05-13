import styled from "styled-components";
import Link from "next/link";
import { IoFastFood } from "react-icons/io5";
import { GiCookingPot } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "../../shared/styles/buttons";

const Nav = styled.nav`
  border-right: 2px solid #ccc;
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 300px;
  position: fixed;
  width: 80%;
`;

const NavTitle = styled.h2`
  color: #1D8F52;
  font-size: 3rem;
  left: 1.5rem;
  position: relative;
`;

const NavItemsContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const NavSectionTitle = styled.h2`
  font-size: 3rem;
  left: 1.5rem;
  margin: 1rem 0;
  position: relative;
`;

const SectionLinksContainer = styled.div`
  color: #656567;
  font-size: 2.5rem;
  padding: 5px 20px;
`;

const NavLink = styled.a`
  color: #656567;
  display: flex;
  margin: 10px 0px;

  &:hover {
    color: #1D8F52;
  }
`;

const NavText = styled.span`
  padding-left: 10px;
`;

const NavBar = () => (
  <Nav>
      <div>
        <NavTitle>EasyMealPlanner</NavTitle>
      </div>
      <NavItemsContainer>
        <SectionLinksContainer>
          <Link href="/create-recipe" passHref>
            <Button>Add Recipe</Button>
          </Link>
        </SectionLinksContainer>
        <NavSectionTitle>Discover</NavSectionTitle>
        <SectionLinksContainer>
          <div>
            <Link href="/recipes-index" passHref>
              <NavLink>
                <IoFastFood />
                <NavText>Recipes</NavText>
              </NavLink>
            </Link>
          </div>
        </SectionLinksContainer>
        <NavSectionTitle>Meal Prep</NavSectionTitle>
        <SectionLinksContainer>
          <div>
            <Link href="/meal-plan" passHref>
              <NavLink>
                <GiCookingPot />
                <NavText>Meal Plan</NavText>
              </NavLink>
            </Link>
          </div>
          <div>
            <Link href="/grocery-list" passHref>
              <NavLink>
                <FaShoppingCart />
                <NavText>Shopping List</NavText>
              </NavLink>
            </Link>
          </div>
        </SectionLinksContainer>
      </NavItemsContainer>
  </Nav>
);

export default NavBar;