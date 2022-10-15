import { css } from "styled-components";

//------------------------------------------------------

export const typography = css`
    h1 {
        color: ${({ theme }) => theme.colors.heading};
        font-size: 6rem;
        font-weight: 900;
    }

    h2 {
        color: ${({ theme }) => theme.colors.heading};
        font-size: 4.4rem;
        font-weight: 300;
        white-space: normal;
        text-align: center;
    }

    h3 {
        font-size: 1.8rem;
        font-weight: 400;
    }

    p {
        color: ${({ theme }) => theme.colors.text};
        opacity: 0.7;
        font-size: 1.65rem;
        line-height: 1.5;
        margin-top: 1rem;
        font-weight: 400;
    }
`