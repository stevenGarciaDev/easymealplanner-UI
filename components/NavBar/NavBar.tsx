import SideNavBar from "../SideNavBar";
import TopNavbar from "../TopNavbar";
import { connect } from "react-redux";
import { selectUserToken } from "../../store/user/user.selectors";

const NavBar = ({ userToken }) => {
    console.log("userToken", userToken);
    return (
        <>
            {
                userToken === '' ? <TopNavbar /> : <SideNavBar />
            }
        </>
    );
}

const mapStateToProps = (state) => ({
    userToken: selectUserToken(state)
});

export default connect(mapStateToProps)(NavBar);