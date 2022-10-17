// Deps
import styled from "styled-components";

//-----------------------------------------------RootContainer

export const RootContainer = styled.header`
    background-color: ${({ theme }) => theme.colors.background.default};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10rem;
    
    .nav-wrapper {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        
        &__logo {
            font-size: 5rem;
        }

        &__menu-icon {
            display: none;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 3.2rem;
            font-size: 2.8rem;
            cursor: pointer;
            
            @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
                display: block;
            }
        }
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
            background-color: ${({ theme }) => theme.colors.background.default};
            position: absolute;
            top: 6rem;
            right: ${( props ) => props.isMenuOpen ? "0" : "100%"};
            height: 100vh;
            width: 100%;
            z-index: 999;
        }
        
        .menu-links {
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
`