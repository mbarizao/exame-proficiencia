import { Container, Content, Toolbar, Drawer } from 'components';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

import { useState } from 'react';
import { withTheme } from 'styled-components';
import Theme from 'styles/theme';
import { Outlet } from 'react-router-dom';
import Assets from 'assets';
import { Row } from 'react-bootstrap';

const MasterLayout = ({ theme, toggleTheme }) => {
    const [drawerVisibility, setDrawerVisibility] = useState(false);

    const toggleDrawer = () => {
        setDrawerVisibility(!drawerVisibility);
    }

    return (
        <Container>
            <Toolbar.View position={'absolute'}>
                <a href="/"><img src={Assets.Logo} width={100} alt={'Logo'} /></a>
                <Toolbar.Actions>
                    <a href="/#home">Início</a>
                    <a href="#about">Sobre</a>
                    <a href="#skills">Habilidades</a>
                    <a href="#certifications">Certificações</a>
                    <a href="#experiences">Experiências</a>
                    <a href="#contact">Contato</a>
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
                    <Drawer.Item onClick={toggleDrawer} href={'/#home'}>Início</Drawer.Item>
                    <Drawer.Item onClick={toggleDrawer} href={'/#about'}>Sobre</Drawer.Item>
                    <Drawer.Item onClick={toggleDrawer} href={'/#skills'}>Habilidades</Drawer.Item>
                    <Drawer.Item onClick={toggleDrawer} href={'/#certifications'}>Certificações</Drawer.Item>
                    <Drawer.Item onClick={toggleDrawer} href={'/#experiences'}>Experiências</Drawer.Item>
                    <Drawer.Item onClick={toggleDrawer} href={'/#contact'}>Contato</Drawer.Item>
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
            <Row> 
                <img alt={"Header"} src={Assets.Header} />
            </Row>

            <Content>
                <Outlet />
            </Content>

            <footer>

            </footer>
        </Container>
    );
}

export default withTheme(MasterLayout);