import Assets from "assets";
import { Text } from "components";
import { Col, Row } from "react-bootstrap";

const About = () => {
    return (
        <main role={'main'}>
            <section name={"clearEnergyInfo"}>
                <Row>
                    <Col className={'d-flex justify-content-center'}>
                        <Text.Title>Sobre</Text.Title>
                    </Col>
                </Row>
                <Row className={'d-flex justify-content-center'}>
                    <Col className={'col-11'}>
                        <Row>
                            <p className={'text-justify'}>
                                A <strong>Solar Energy</strong> é uma empresa focada em utilizar as melhores técnologias do mercado com o propósito de ver um planeta sustentável
                                no futuro. Atuamos causando impacto na vida de nossos clientes, gerando economia em sua conta de luz e proporcionando-lhes a satisfação pessoal de
                                estarem contribuindo para um mundo mais limpo.
                            </p>
                        </Row>
                        <Row className={'my-2'}>
                            <p className={'text-justify'}>
                                Atuamos nas áreas: residencial, comercial, industrial e rural, integrando soluções dos melhores fabricantes do mercado e elaborando um dimensionamento
                                adequado para as necessidades de cada cliente. Queremos um mundo melhor, e esse exemplo começa em nossas vidas, em nossa casa, na relação verdadeira com as pessoas, nossa família, amigos, nossos colaboradores e clientes.
                            </p>
                        </Row>
                        <Row>
                            <img alt={"Banner Solar Energy"} src={Assets.Banner} />
                        </Row>
                    </Col>
                </Row>
                <Row>

                </Row>
            </section>
        </main>
    );
}

export default About;