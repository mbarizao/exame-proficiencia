import { Container, Content, Toolbar, Drawer } from 'components';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

import { useState } from 'react';
import { withTheme } from 'styled-components';
import Theme from 'styles/theme';
import { Outlet } from 'react-router-dom';
import Assets from 'assets';
import { Col, Row } from 'react-bootstrap';

const MasterLayout = ({ theme, toggleTheme }) => {
    const [drawerVisibility, setDrawerVisibility] = useState(false);

    const toggleDrawer = () => {
        setDrawerVisibility(!drawerVisibility);
    }

    return (
        <Container>
            <Toolbar.View position={'absolute'}>
                <a href="/"><img src={Assets.LogoDark} width={100} alt={'Website logo'} /></a>
                <Toolbar.Actions>
                    <a href="/">Início</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/contato">Contato</a>
                    <span href="#">
                        {
                            Theme.getName() === 'light' ?
                                <FaIcons.FaMoon size={36} onClick={toggleTheme} /> :
                                <FaIcons.FaSun size={36} onClick={toggleTheme} />
                        }
                    </span>
                </Toolbar.Actions>
                <Toolbar.Button onClick={toggleDrawer}>
                    <AiIcons.AiOutlineMenu size={28} color={theme.colors.text} />
                </Toolbar.Button>
            </Toolbar.View>

            {drawerVisibility &&
                <Drawer.View>
                    <Drawer.Item onClick={toggleDrawer} href={'/'}>Início</Drawer.Item>
                    <Drawer.Item onClick={toggleDrawer} href={'/sobre'}>Sobre</Drawer.Item>
                    <Drawer.Item onClick={toggleDrawer} href={'/contato'}>Contato</Drawer.Item>
                    <Drawer.Item href={'#'}>
                        {
                            Theme.getName() === 'light' ?
                                <FaIcons.FaMoon size={36} onClick={toggleTheme} /> :
                                <FaIcons.FaSun size={36} onClick={toggleTheme} />
                        }
                    </Drawer.Item>
                </Drawer.View>
            }

            {/* Imagem do topo (HEADER) */}
            <Row className={'headerAjust'}>
                <img src={Assets.Header} alt={"Imagem de cabeçalho"} />
            </Row>

            <Content>
                <Outlet />
            </Content>

            <footer>
                <Row className={'d-flex justify-content-center'}>
                    <Col className={'col-12 col-md-6 col-lg-6 col-xl-6'}>
                        <h5><strong>Formas de contato</strong></h5>
                        <div className={'d-flex flex-column'}>
                            <span><FaIcons.FaMapMarkerAlt className={'mx-2'} /><strong>Endereço:</strong> <a rel={'noreferrer'} href={"https://www.google.com/maps/place/Cantagalo,+RJ/@-21.9315986,-42.3592531,12z"} target={'_blank'}>Centro, Cantagalo - RJ</a></span>
                            <span><FaIcons.FaEnvelope className={'mx-2'} /><strong>Email:</strong> <a href={'mailto:mbarizao07@gmail.com'}>mbarizao07@gmail.com</a></span>
                            <span><FaIcons.FaWhatsapp className={'mx-2'} /><strong>WhatsApp:</strong> <a href={'https://api.whatsapp.com/send?phone=+552298125-4743&text=Olá%20Marllon!'}>(22) 98125-4743</a></span>
                        </div>
                    </Col>
                </Row>
            </footer>
        </Container>
    );
}

export default withTheme(MasterLayout);