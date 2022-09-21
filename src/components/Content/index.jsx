import styled from "styled-components";

const Content = styled.div`
    width: 100%;
    height: max-content;
    background-color: ${({ theme }) => theme.colors.background};

    @media (max-width: 768px) {
        padding: ${({theme}) => theme.defaults.spacing.paddingContentMobile};
    }
`;

export default Content;