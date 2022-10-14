// Deps
import styled from "styled-components";

//-----------------------------------------------Main Container

export const RootHeader = styled.header`
    height: 10rem;
    background-color: ${({theme}) => theme.colors.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    
    .nav-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 130rem;
    }

    .logo {
        font-size: 5rem;
    }
`;

//-----------------------------------------------Nav

export const Nav = styled.nav`
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        font-size: 2rem;

        .nav-links {
            
            &:link, &:visited {
                transition: color 0.3s linear;
                text-transform: uppercase;
                color: ${({theme})=>theme.colors.black};
                font-size: 1.8rem;
            }

            &:hover {
                color: ${({theme})=>theme.colors.helper};
            }
            
            &:active{
                color: ${({theme})=>theme.colors.helper};
            }

        }
    }
`;