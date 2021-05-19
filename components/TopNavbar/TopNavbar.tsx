import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
    align-items: center;
    border: 1px solid #ccc;
    display: flex;
    height: 60px;
    font-size: 2rem;
    justify-content: space-between;
    padding: 0px 10px;
`;

const AuthLinksContainer = styled.div`
    align-items: center;
    display: flex;
`;

const LinkTitleText = styled.a`
    color: #1D8F52;
    font-family: 'Luckiest Guy', cursive;
    font-size: 2.5rem;
    margin: 0 5px;
    position: relative;
    top: 5px;
`;

const LinkText = styled.a`
    cursor: pointer;
    display: inline-block;
    margin: 0 5px;

    &:hover {
        color: #1D8F52;
    }
`;

const TopNavbar = () => (
    <Nav>
        <Link href="/login" passHref>
            <LinkTitleText>EasyMealPlanner</LinkTitleText>
        </Link>
        <AuthLinksContainer>
            <Link href="/login">
                <LinkText>Login</LinkText>
            </Link>
            <Link href="/signup">
                <LinkText>Sign up</LinkText>
            </Link>
        </AuthLinksContainer>
    </Nav>
);

export default TopNavbar;