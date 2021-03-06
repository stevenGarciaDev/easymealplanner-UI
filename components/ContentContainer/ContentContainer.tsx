import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../store/user/user.selectors";

type ContentProps = {
    isAuthenticated: boolean;
}

const Content = styled.div<ContentProps>`
    height: 100%;
    margin: 0;
    overflow-x: hidden;
    padding: 90px 0px 0px 0px;

    @media screen and (min-width: 1000px) {
        float: right;
        padding: 0;
        width: ${(props) => (props.isAuthenticated) ? "calc(100% - 350px)" : "100%"};
    }
`;

const ContentContainer = ({ children }) => {
    const userToken = useSelector(selectUserToken);
    return (
        <Content
            isAuthenticated={userToken !== ''}
        >
            {children}
        </Content>

    );
}

export default ContentContainer;