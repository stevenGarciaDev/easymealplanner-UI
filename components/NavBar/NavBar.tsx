import { useSelector } from "react-redux";
import SideNavBar from "../SideNavBar";
import TopNavbar from "../TopNavbar";
import { selectUserToken } from "../../store/user/user.selectors";
import MobileTopNavbar from "../MobileTopNavbar";


const NavBar = () => {
    const token = useSelector(selectUserToken);

    return (
        <>
            {
                token === '' ? 
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


export default NavBar;