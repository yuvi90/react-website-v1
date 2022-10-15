// Deps
import { createGlobalStyle } from "styled-components";
// Partial Styles
import { global, typography, generic } from "./partials";

export const GlobalStyle = createGlobalStyle`
    ${global};
    ${typography};
    ${generic};
`;
