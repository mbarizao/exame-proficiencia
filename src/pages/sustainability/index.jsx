import Assets from "assets";
import { Text } from "components";
import { Col, Row } from "react-bootstrap";

const Sustainability = () => {
    return (
        <main role={'main'}>
            <section>
                <Row>
                    <Col className={'d-flex justify-content-center'}>
                        <Text.Title>Sustentável</Text.Title>
                    </Col>
                </Row>
                <Row className={'d-flex justify-content-center'}>
                    <Col className={'col-11'}>
                        <p className={'text-justify'}>
                            O planeta está em constante desenvolvimento, por isso, é muito importante destacar a energia solar e a sustentabilidade para que a
                            manutenção dos recursos naturais seja feita de forma consciente.
                            Desta forma, apesar da energia solar ser uma fonte renovável, o meio ambiente ainda sofre riscos de poluição e desmatamento
                            através de outras fontes.
                        </p>
                        <Row className={'d-flex flex-column flex-md-row flex-lg-row flex-xl-row'}>
                            <Col className={'col-12 col-md-3 col-lg-3 col-xl-3'}>
                                <div>
                                    <img src={Assets.Solar} alt="Energia solar" width={'100%'} />
                                </div>
                            </Col>
                            <Col className={'my-3 my-md-0 my-lg-0 my-xl-0'}>
                                <p className={'text-justify'}>
                                    Em vista disso, energia solar e sustentabilidade trazem diversos benefícios para o meio ambiente,
                                    como: redução de poluição por fontes contaminadoras (carvão) e de gases do efeito estufa, diminuição do desmatamento e
                                    elevação do uso de recursos naturais.
                                    energia solar é sustentável porque sua matéria prima é originada da natureza, ou seja, a captação de energia elétrica é feita
                                    pela luz do sol.
                                    Ainda assim, pode-se contar com a energia solar para a utilização em diversas ações como o aquecimento de água para o consumo,
                                    eletricidade em tomadas e aparelhos eletrônicos, por exemplo.
                                    Portanto, sua eficiência permite que a geração de energia elétrica seja feita de modo consciente e econômico,
                                    não só do ponto de vista financeiro como também ambiental.
                                </p>
                            </Col>
                        </Row>
                        <p>

                        </p>
                    </Col>
                </Row>
            </section>
        </main>
    )
}

export default Sustainability;