import Assets from "assets";
import { Card, Text } from "components";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main role={'main'}>
      <section name={"clearEnergyInfo"}>
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

      <section>

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

      <section>
        <Row className={'d-flex justify-content-center justify-content-md-start justify-content-lg-start justify-content-xl-start'}>
          <Row>
            <Text.Title>Fontes energéticas renováveis</Text.Title>
          </Row>
          <Row className={'mx-2 mt-3 d-flex flex-column flex-md-row flex-lg-row flex-xl-row'}>
            <Col className={'col-12 col-md-6 col-lg-6 col-xl-6'}>

            </Col>
            <Col className={'my-4 my-md-0 my-lg-0 my-xl-0'}>

            </Col>
          </Row>
        </Row>
      </section>
    </main>
  );
}

export default Home;
