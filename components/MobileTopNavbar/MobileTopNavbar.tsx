import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { connect } from "react-redux";
import { selectSidebarStatus } from "../../store/sidebar/sidebar.selectors";
import { openSidebar, closeSidebar } from "../../store/sidebar/sidebar.actions";

const Container = styled.div`
    align-items: center;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid #888;
    display: flex;
    height: 70px;
    justify-content: space-between;
    left: 0;
    padding: 0px 20px;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 3;

    @media screen and (min-width: 1000px) {
        display: none;
    }
`;

const OpenSidebarIcon = styled(GiHamburgerMenu)`
    cursor: pointer;
    font-size: 3rem;
    position: relative;
`;

const CloseSidebarIcon = styled(GrClose)`
    cursor: pointer;
    font-size: 3rem;
    position: relative;
`;

const Title = styled.h2`
    color: var(--color-primary);
    font-family: 'Luckiest Guy', cursive;
    font-size: 1.8rem;
`;

const MobileTopNavbar = ({ isSidebarOpen, open, close }) => {
    return (
        <Container>
            <Title>Easy Meal Planner</Title>
            {isSidebarOpen ? 
                    <CloseSidebarIcon
                        onClick={close}
                    />
                : 
                    <OpenSidebarIcon
                        onClick={open}
                    />
            }
        </Container>
    );
}

const mapStateToProps = (state) => ({
    isSidebarOpen: selectSidebarStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
    open: () => dispatch(openSidebar()),
    close: () => dispatch(closeSidebar())
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileTopNavbar);