import { keyframes } from "styled-components";

export const spinnerParticleStart = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}`;

export const spinnerParticleMiddle = keyframes`
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(24px, 0);
    }
`;

export const spinnerParticleEnd = keyframes`
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    `;
