import Assets from "assets";
import { Card, Text } from "components";
import { Col, ProgressBar, Row } from "react-bootstrap";
import Chart from "react-map-chart/dist/Chart";

const Home = () => {
  return (
    <main>
      <section name={"clearEnergyInfo"}>
        <Row>
          <Col className={'d-flex justify-content-center'}>
            <Text.Title>Energia limpa e acessível</Text.Title>
          </Col>
        </Row>
        <Row className={'mt-4 d-flex align-items-center align-items-center flex-column flex-md-row flex-lg-row flex-xl-row justify-content-evenly'}>
          <Card imageSrc={Assets.Sustainability} title={"Sustentável"} description={"Menos prejudicial ao meio ambiente"} />
          <Card imageSrc={Assets.Efficience} title={"Eficiência"} description={"Ultrapassando barreiras da eficiência energética"} />
          <Card imageSrc={Assets.Coin} title={"Acessível"} description={"Baixo custo na implementacação"} />
        </Row>
      </section>
      <section>
        <Row>
          <Row>
            <Col>
              <Text.Title>Energia renovável</Text.Title>
              <Text.Subtitle>Classificação de países/áreas de acordo com a capacidade energética renovável ou geração de eletricidade.</Text.Subtitle>
            </Col>
          </Row>
          <Row>
            <Col className={'col-3'}>

            </Col>
            <Col>
            </Col>
          </Row>
        </Row>
      </section>
    </main>
  );
}

export default Home;
