import { Routes, Route } from 'react-router-dom'
import VLibras from '@djpfs/react-vlibras';

import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Theme from 'styles/theme';

// Importação de páginas
import Home from 'pages/home';
import { MasterLayout } from 'components';
import GlobalStyles from 'styles/GlobalStyles';
import About from 'pages/about';
import Accessible from 'pages/accessible';
import Efficiency from 'pages/efficiency';
import Sustainability from 'pages/sustainability';
import Contact from 'pages/contact';

const Pages = () => {
    const [theme, setTheme] = useState(Theme.get());

    // Alternar tema
    const toggleTheme = () => {
        Theme.set(Theme.getName() === 'light' ? 'dark' : 'light');
        setTheme(Theme.get());
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <VLibras forceOnload={true} />
            <Routes>
                {/* Todas as páginas ficam envolvidas por um master layout com padrões das telas */}
                <Route element={<MasterLayout toggleTheme={toggleTheme} />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/sobre' element={<About />} />
                    <Route path='/contato' element={<Contact />} />
                    <Route path='/acessivel' element={<Accessible />} />
                    <Route path='/eficiencia' element={<Efficiency />} />
                    <Route path='/sustentabilidade' element={<Sustainability />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default Pages;