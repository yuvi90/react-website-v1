// Deps
import styled from "styled-components";

//-----------------------------------------------Main Container

export const RootHeader = styled.header`
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    
    .nav-wrapper {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 140rem;
        padding: 0 4.8rem;

        .mobile-menu-icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 4.5rem;
            display: none;
            font-size: 2.8rem;
            cursor: pointer;
            
            @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
                display: block;
            }
        }
    }

    .logo {
        font-size: 5rem;
    }
`;

//-----------------------------------------------Nav

export const Nav = styled.nav`

    ul {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        font-size: 2rem;
        transition: all 0.2s ease-in-out;
        
        @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
            flex-direction: column;
            background-color: ${({ theme }) => theme.colors.bg};
            position: absolute;
            top: 7rem;
            right: ${(props) => (props.isMenuOpen ? "0" : "100%")};
            height: 100vh;
            width: 100%;
            z-index: 999;
        }

        .nav-links {
            
            &:link, &:visited {
                transition: color 0.3s linear;
                text-transform: uppercase;
                color: ${({ theme }) => theme.colors.black};
                font-size: 1.8rem;
            }

            &:hover {
                color: ${({ theme }) => theme.colors.helper};
            }
            
            &:active {
                color: ${({ theme }) => theme.colors.helper};
            }

        }
    }
`;