import styled from "styled-components";
import { connect } from "react-redux";
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

const ContentContainer = ({ userToken, children }) => {
    return (
        <Content
            isAuthenticated={userToken !== ''}
        >
            {children}
        </Content>

    );
}

const mapStateToProps = (state) => ({
    userToken: selectUserToken(state),
});

export default connect(mapStateToProps)(ContentContainer);