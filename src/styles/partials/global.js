import { css } from "styled-components";

//------------------------------------------------------

export const global = css`
    html {
        font-size: 62.5%; /*------converting 1rem to 10px -------*/
        overflow-x: hidden;
        box-sizing: border-box;
        /* scroll-behaviour: smooth; */
    }
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        font-family: 'Work Sans', sans-serif;
        user-select: none;
    }


    ::-webkit-scrollbar {
        width: 1.5rem;
    }

    ::-webkit-scrollbar-track {
        background-color: rgb(24 24 29);
    }

    ::-webkit-scrollbar-thumb {
        background: #fff;
        border: 5px solid transparent;
        border-radius: 9px;
        background-clip: content-box;
    }
`