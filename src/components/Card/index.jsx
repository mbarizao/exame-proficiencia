import { Button, Text } from "components";
import styled from "styled-components";

const View = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 8px 8px 20px 8px;
    background-color: ${({theme}) => theme.colors.card};
    border-radius: 4px;

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 20px;
        border-bottom: 1px solid ${({theme}) => theme.colors.shadow};
    }
`;

const Image = styled.img`
    width: 80%;

    @media (max-width: 768px) {
        width: 50%;
    }
` 

const Card = ({imageSrc, title, description, onClick}) => {
    return (
        <View>
            <Image alt={"Card top"} src={imageSrc}/>
            <Text.CardTitle>{title}</Text.CardTitle>
            <Text.CardDescription>{description}</Text.CardDescription>
            <Button.Rounded className={'mt-3'} onClick={onClick}>Saiba mais</Button.Rounded>
        </View>
    );
}

export default Card;