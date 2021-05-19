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

    @media screen and (min-width: 1000px) {
        padding: 0px 50px;
    }
`;

const AuthLinksContainer = styled.div`
    align-items: center;
    display: flex;
`;

const LinkTitleText = styled.a`
    color: var(--color-primary);
    font-family: 'Luckiest Guy', cursive;
    font-size: 2rem;
    margin: 0 5px;
    position: relative;
    top: 5px;

    @media screen and (min-width: 500px) {
        font-size: 2.5rem;
    }
`;

const LinkText = styled.a`
    cursor: pointer;
    display: inline-block;
    font-size: 1.8rem;
    margin: 0 5px;

    &:hover {
        color: var(--color-primary);
    }

    @media screen and (min-width: 500px) {
        font-size: 2rem;
    }

    @media screen and (min-width: 1000px) {
        margin: 0 10px;
    }
`;

const TopNavbar = () => (
    <Nav>
        <Link href="/" passHref>
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