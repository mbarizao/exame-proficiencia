import FetchApi from "api";
import Assets from "assets";
import { Card, Chart, Text } from "components";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [chartData, setChartData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      // Busca dados sobre energia solar na API
      let response = await FetchApi('http://191.253.209.4:33500/solarAnalytics');

      if (response.status) {
        let data = response.data.map((item) => item.qtd)
        let labels = response.data.map((item) => item.estado)
        setChartData(data);
        setChartLabels(labels);
      }
    }

    fetch();
  }, []);

  return (
    <main role={'main'}>
      <section aria-label={"Cartões sobre sustentabilidade, eficiência e acessibilidade da energia solar."}>
        <Row>
          <Col className={'d-flex justify-content-center'}>
            <Text.Title>Energia solar fotovoltaica</Text.Title>
          </Col>
        </Row>
        <Row className={'mt-4 d-flex align-items-center align-items-center flex-column flex-md-row flex-lg-row flex-xl-row justify-content-evenly'}>
          <Card onClick={() => navigate('/sustentabilidade')} imageSrc={Assets.Sustainability} title={"Sustentável"} description={"Menos prejudicial ao meio ambiente"} />
          <Card onClick={() => navigate('/eficiencia')} imageSrc={Assets.Efficience} title={"Eficiência"} description={"Ultrapassando barreiras da eficiência energética"} />
          <Card onClick={() => navigate('/acessivel')} imageSrc={Assets.Coin} title={"Acessível"} description={"Baixo custo na implementacação"} />
        </Row>
      </section>

      <section aria-label={"Sessão sobre fontes energéticas renováveis"}>

        <Row className={'d-flex justify-content-center justify-content-md-start justify-content-lg-start justify-content-xl-start'}>
          <Row>
            <Text.Title>O que são fontes energéticas renováveis?</Text.Title>
          </Row>
          <Row className={'mt-3 d-flex flex-column flex-md-row flex-lg-row flex-xl-row'}>

            <Col className={'col-12 col-md-3 col-lg-3 col-xl-3'}>
              <img className={'sectionImage'} src={Assets.ClearEnergy} alt={"7º Objetivo de Desenvolvimento Sustentável"} />
            </Col>

            <Col className={'my-4 my-md-0 my-lg-0 my-xl-0'}>
              <Text.Subtitle>
                Fontes de energia renováveis são os recursos naturais disponíveis em abundância e que se renovam constantemente na natureza,
                embora não possam ser considerados inesgotáveis,
                sendo utilizados pelo homem para a geração de diferentes tipos de energia e combustíveis.
              </Text.Subtitle>

              <Text.Subtitle>
                Alguns exemplos de fontes energéticas renováveis são:
              </Text.Subtitle>

              <ul className={'energyList'}>
                <li>Energia solar</li>
                <li>Energia eólica</li>
                <li>Energia hídrica ou hidroelétrica</li>
                <li>Energia da biomassa</li>
                <li>Energia geotérmica</li>
                <li>Energia gerada pelas ondas e marés</li>
              </ul>

            </Col>
          </Row>
        </Row>
      </section>

      <section aria-label={""}>
        <Row className={'d-flex justify-content-center justify-content-md-start justify-content-lg-start justify-content-xl-start'}>
          <Row>
            <Text.Title>Implementação de energia solar no Brasil</Text.Title>
            <Text.Subtitle>Gráfico de implementação de energia solar nos estados brasileiros entre os anos 2000 à 2011.</Text.Subtitle>
          </Row>
          <Row className={'mx-2 mt-3 d-flex flex-column flex-md-row flex-lg-row flex-xl-row'}>
            <Col className={'chart-container col-12 col-md-6 col-lg-6 col-xl-6'}>
              <Chart data={chartData} labels={chartLabels} />
            </Col>
            <Col>
              <Text.Subtitle>
                O Brasil foi o 4º país que mais acrescentou capacidade solar fotovoltaica em 2021 no mundo, com novos 5,7 GW no último ano,
                segundo apuração da Associação Brasileira de Energia Solar Fotovoltaica (ABSOLAR)
                com base em dados atualizados pela Agência Nacional de Energia Elétrica (ANEEL) e a recente publicação da
                Agência Internacional de Energias Renováveis (IRENA).
              </Text.Subtitle>
              <a className={'my-3'} href={'https://dadosabertos.ibama.gov.br/dados/RAPP/fonteEnergetica/relatorio.json'}>Fonte de dados: https://dadosabertos.ibama.gov.br</a>
            </Col>
          </Row>
        </Row>
      </section>
    </main>
  );
}

export default Home;
