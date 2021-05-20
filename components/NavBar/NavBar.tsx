import SideNavBar from "../SideNavBar";
import TopNavbar from "../TopNavbar";
import { connect } from "react-redux";
import { selectUserToken } from "../../store/user/user.selectors";
import MobileTopNavbar from "../MobileTopNavbar";

const NavBar = ({ userToken }) => {
    return (
        <>
            {
                userToken === '' ? 
                    <TopNavbar /> 
                : 
                    <>
                        <MobileTopNavbar />
                        <SideNavBar />
                    </>
            }
        </>
    );
}

const mapStateToProps = (state) => ({
    userToken: selectUserToken(state)
});

export default connect(mapStateToProps)(NavBar);