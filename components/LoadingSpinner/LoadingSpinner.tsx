import Loader from "react-loader-spinner";
import styled from "styled-components";

const Message = styled.p`
    font-size: 2rem;
`;

const LoadingSpinner = () => {
    return (
        <>
            <Message>Loading...</Message>
            <Loader
                type="Oval"
                color="#1D8F52"
                height={70}
                width={70}
            />
      </>
    );
}

export default LoadingSpinner;