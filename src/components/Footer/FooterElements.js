// Deps
import styled from "styled-components";

//--------------------------------------Footer Container

export const FooterMainContainer = styled.footer`

    .contact-short {
        max-width: 60vw;
        margin: auto;
        padding: 5rem 10rem;
        background-color: ${({ theme }) => theme.colors.bg};
        border-radius: 1rem;
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};
        transform: translateY(50%);
    }

    .grid div:last-child {
        justify-self: end;
        align-self: stretch;
    }

    .upper-section {
        padding: 14rem 0 9rem 0;
        background-color: ${({ theme }) => theme.colors.footer_bg};

        h3 {
            color: ${({ theme }) => theme.colors.hr};
            margin-bottom: 2.4rem;
        }
        
        p {
            color: ${({ theme }) => theme.colors.white};
        }
        
        .social-icons {
            display: flex;
            gap: 2rem;

            div {
                padding: 1rem;
                border-radius: 50%;
                border: 0.2rem solid ${({ theme }) => theme.colors.white};
                color: ${({ theme }) => theme.colors.white};
                
                .icons {
                    color: ${({ theme }) => theme.colors.white};
                    font-size: 2.4rem;
                    position: relative;
                }
            }          
        }

        .bottom-section {
            padding-top: 9rem;

            hr {
                margin-bottom: 2rem;
                color: ${({ theme }) => theme.colors.hr};
                height: 0.1px;
            }
        }
    }
`;