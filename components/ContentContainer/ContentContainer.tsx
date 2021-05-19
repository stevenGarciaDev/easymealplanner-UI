import styled from "styled-components";
import { connect } from "react-redux";
import { selectUser, selectUserToken } from "../../store/user/user.selectors";

type ContentProps = {
    isAuthenticated: boolean;
}

const Content = styled.div<ContentProps>`
    height: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0px;

    @media screen and (min-width: 1200px) {
        float: right;
        width: ${(props) => props.isAuthenticated ? "calc(100% - 350px)" : "100%"};
    }
`;

const ContentContainer = ({ userToken, children }) => {
    return (
        <Content isAuthenticated={userToken !== ''}>
            {children}
        </Content>

    );
}

const mapStateToProps = (state) => ({
    userToken: selectUserToken(state)
});

export default connect(mapStateToProps)(ContentContainer);