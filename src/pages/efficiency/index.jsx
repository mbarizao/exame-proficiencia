import Assets from "assets";
import { Text } from "components";
import { Col, Row } from "react-bootstrap";

const Efficiency = () => {
    return (
        <main role={'main'}>
            <section>
                <Row>
                    <Col className={'d-flex justify-content-center'}>
                        <Text.Title>Eficiência</Text.Title>
                    </Col>
                </Row>
                <Row className={'d-flex justify-content-center'}>
                    <Col className={'col-11'}>
                        <p>
                            A eficiência de um painel solar representa o seu potencial de conversão da luz solar em energia elétrica por metro quadrado.
                            Um painel solar com eficiência de 16,5%/m2 significa que do total de luz captado pelo módulo 16,5% será a geração de eletricidade para o consumo.
                            Portanto, quanto maior a eficiência de um painel solar maior será a quantidade de energia elétrica produzida por m2 com a mesma quantidade de luz incidente.
                            É preciso entender que a eficiência dos painéis solares informada por sua fabricante é medida em laboratório por meio de um teste que utiliza um conjunto de valores reconhecido e adotado internacionalmente, conhecido pela sigla STC (Standard Test Conditions).
                            Trata-se dos padrões definidos pela indústria solar para atestar a qualidade e eficiência dos equipamentos.
                            Esse número é difícil de medir, uma vez que se refere à quantidade (extensão) de atmosfera terrestre que a luz precisa passar antes de chegar ao solo.
                        </p>
                        <h4><strong>Fatores que influênciam na eficiência</strong></h4>
                        <ul className="my-3">
                            <li><h5><strong>Células fotovoltaicas</strong></h5>
                                <p>
                                    Cada módulo fotovoltaico é composto por dezenas de células solares.
                                    A célula solar é a unidade básica de funcionamento da tecnologia fotovoltaica e é responsável pelo processo que converte a luz em energia elétrica.
                                    Quanto mais eficientes forem as células solares utilizadas nos módulos fotovoltaicos, maior será a eficiência do painel solar.
                                </p>
                            </li>
                            <li><h5><strong>Ligamentos e modelagem</strong></h5>
                                <p>
                                    A forma como as células fotovoltaicas são posicionadas dentro da placa solar e o acabamento dado a ela também impactam na sua eficiência, pois o cálculo da eficiência é feito com base na área total do dispositivo que recebe a radiação solar.
                                    por esse motivo que a eficiência do painel solar é sempre menor que a eficiência individual de cada uma de suas células fotovoltaicas, pois elas possuem menos dessas áreas “mortas” e têm um maior aproveitamento da luz.
                                </p>
                            </li>
                            <li><h5><strong>Irradiação Solar</strong></h5>
                                <p>
                                    Placas fotovoltaicas precisam de luz do sol para gerar energia elétrica e têm o seu melhor aproveitamento em locais com as maiores médias anuais de radiação solar.
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </section>
        </main>
    )
}

export default Efficiency;