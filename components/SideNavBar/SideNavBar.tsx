import styled from "styled-components";
import Link from "next/link";
import { IoFastFood } from "react-icons/io5";
import { GiCookingPot } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { Button } from "../../shared/styles/buttons";
import { useSelector } from "react-redux";
import { selectSidebarStatus } from "../../store/sidebar/sidebar.selectors";
import { logoutUser } from "../../store/user/user.actions";
import { useDispatch } from "react-redux";

type NavProps = {
  isSidebarOpen: boolean;
};

const Nav = styled.nav<NavProps>`
  background-color: #fff;
  border-right: 2px solid #ccc;
  display: ${(props) => props.isSidebarOpen ? "flex" : "none"};
  flex-direction: column;
  height: 100%;
  max-width: 350px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: fixed;
  width: 80%;
  z-index: 4;

  @media screen and (min-width: 500px) {
    overflow-y: hidden;
  }

  @media screen and (min-width: 1000px) {
    display: flex;
  }
`;

const NavTitle = styled.h2`
  color: var(--color-primary);
  font-family: 'Permanent Marker', cursive;
  font-size: 3rem;
  position: relative;
  text-align: center;
  top: 10px;
`;

const NavItemsContainer = styled.div`
  position: relative;
  height: 100%;
  top: 20px;
  width: 100%;
`;

const NavSectionTitle = styled.h2`
  font-size: 3rem;
  left: 4rem;
  margin: 1rem 0;
  position: relative;
`;

const SectionLinksContainer = styled.div`
  color: #656567;
  font-size: 2.5rem;
  padding: 5px 50px;
`;

const NavLink = styled.a`
  color: #656567;
  display: flex;
  margin: 15px 0px;

  &:hover {
    color: var(--color-primary);
  }
`;

const NavText = styled.span`
  padding-left: 10px;
`;

const SideNavBar = () => {
  const isSidebarOpen = useSelector(selectSidebarStatus);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  }

  return (
    <Nav isSidebarOpen={isSidebarOpen}>
        <div>
          <NavTitle>Easy Meal Planner</NavTitle>
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
          <NavSectionTitle>Settings</NavSectionTitle>
          <SectionLinksContainer>
            <div>
              <Link href="/account" passHref>
                <NavLink>
                  <MdAccountCircle />
                  <NavText>Account</NavText>
                </NavLink>
              </Link>
            </div>
            <div>
              <Link href="/login" passHref>
                <NavLink onClick={handleLogout}>
                  <BiLogOutCircle />
                  <NavText>Logout</NavText>
                </NavLink>
              </Link>
            </div>
          </SectionLinksContainer>
        </NavItemsContainer>
    </Nav>
  );
};

export default SideNavBar;