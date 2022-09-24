import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 

// Scrollbar styles
::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(71, 82, 92, 0.3);
            box-shadow: inset 0 0 6px rgba(71, 82, 92, 0.3);
    background-color: ${({ theme }) => theme.colors.background};
}

::-webkit-scrollbar
{
    width: 5px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.text};
}

::-webkit-scrollbar-thumb
{
    background-color: rgba(30, 31, 41, 0.5);
}

//Section

section {
    padding: 30px;
    border-bottom: 1px solid ${({theme}) => theme.colors.shadow};

    @media (max-width: 768px) {
        padding: 5px;
        border-bottom: none;
    }
}

// Color of all Html tag texts
* {
    color: ${({ theme }) => theme.colors.text};
}

// Footer

footer {
    padding: 2rem;
    background-color: ${({theme}) => theme.colors.footer};
    height: ${({theme}) => theme.defaults.sizes.footerHeight};
    * {
        color: ${({ theme }) => theme.colors.constTextLight};
    }
}


`;

export default GlobalStyles;