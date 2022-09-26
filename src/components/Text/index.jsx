import styled from "styled-components";

const Title = styled.h1`
    color: ${({theme}) => theme.colors.text};
    font-size: 2.5rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

const Subtitle = styled.p`
    color: ${({theme}) => theme.colors.text};
    font-size: 1.2rem;
    font-weight: normal;   

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

const CardTitle = styled.span`
    color: ${({theme}) => theme.colors.text};
    font-size: 1.5rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const CardDescription = styled.span`
    color: ${({theme}) => theme.colors.text};
    font-size: 1.2rem;
    font-weight: normal;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

const Text = {
    Title,
    Subtitle,
    CardTitle,
    CardDescription
}

export default Text;