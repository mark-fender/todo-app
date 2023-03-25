import styled from "styled-components";
import { spinnerParticleEnd, spinnerParticleMiddle, spinnerParticleStart } from "../constants/animations";
import { backgroundGreen } from "../constants/cssColors";
import { CenteredFlexBox } from "./styled/commons.styled";

const SpinnerWrapper = styled(CenteredFlexBox)`
    width: 100%;
    height: 10rem;
    margin: 5rem 0;
`;

const Spinner = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    div:nth-child(1) {
        left: 8px;
        animation: ${spinnerParticleStart} 0.6s infinite;
    }
    div:nth-child(2) {
        left: 8px;
        animation: ${spinnerParticleMiddle} 0.6s infinite;
    }
    div:nth-child(3) {
        left: 32px;
        animation: ${spinnerParticleMiddle} 0.6s infinite;
    }
    div:nth-child(4) {
        left: 56px;
        animation: ${spinnerParticleEnd} 0.6s infinite;
    }
`;

const SpinnerParticle = styled.div`
    position: absolute;
    top: 33px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${backgroundGreen};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
`;

const LoadingSpinner = () => {
    return (
        <SpinnerWrapper>
            <Spinner>
                <SpinnerParticle />
                <SpinnerParticle />
                <SpinnerParticle />
                <SpinnerParticle />
            </Spinner>
        </SpinnerWrapper>
    );
};

export default LoadingSpinner;
