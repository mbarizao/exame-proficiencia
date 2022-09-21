import { Routes, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Theme from 'styles/theme';

// Importação de páginas
import Home from 'pages/home';
import { MasterLayout } from 'components';
import GlobalStyles from 'styles/GlobalStyles';

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
            <Routes>
                {/* Todas as páginas ficam envolvidas por um master layout com padrões das telas */}
                <Route element={<MasterLayout toggleTheme={toggleTheme} />}>
                    <Route path='/' element={<Home />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default Pages;