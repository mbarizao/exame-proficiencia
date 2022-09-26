import Assets from "assets";
import { Text } from "components";
import { Col, Row } from "react-bootstrap";

const Accessible = () => {
    return (
        <main role={'main'}>
            <section>
                <Row>
                    <Col className={'d-flex justify-content-center'}>
                        <Text.Title>Acessível</Text.Title>
                    </Col>
                </Row>
                <Row className={'d-flex justify-content-center'}>
                    <Col className={'col-11'}>
                        <p>
                            A geração solar está rapidamente se consolidando como uma fonte segura e acessível no Brasil e tem papel essencial para a construção de um futuro de baixo carbono, segundo o ministro de Minas e Energia, Bento Albuquerque.
                            A fala foi feita em mensagem gravada para a terceira assembleia da International Solar Alliance (ISA), em 2020, uma coalizão de países com alta incidência solar para o desenvolvimento do uso da energia fotovoltaica.
                            Os painéis fotovoltaicos, que coletam a luz do sol para converter em eletricidade , são integrados ou instalados nos telhados das casas, prédios de apartamentos e escritórios e edifícios agrícolas.
                            Além de serem utilizados para fins puramente residenciais, os sistemas fotovoltaicos podem fornecer energia em locais remotos, como abrigos de montanha ou navios navegando no mar, e para instalações urbanas, como relés de rádio e sinalizadores.
                            Eles permitem que vilarejos remotos se beneficiem do bombeamento de águas subterrâneas para água potável e irrigação, sistemas de telecomunicações como rádio, televisão e telefones celulares e aparelhos como geladeiras e máquinas de costura.
                        </p>
                        <p>
                            Ademais, a acessibilidade da energia fotovoltaica é uma ferramenta essencial nos países em desenvolvimento, onde 1,3 bilhão de pessoas não tem acesso à rede.
                            Para as comunidades desses países, sistemas solares independentes é uma das poucas maneiras de ter acesso a eletricidade em áreas remotas.
                        </p>

                    </Col>
                </Row>
            </section>
        </main>
    )
}

export default Accessible;



