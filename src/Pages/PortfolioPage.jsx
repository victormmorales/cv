import React, { useState } from 'react'
import { MainLayout, InnerLayout } from '../styles/Layouts';
import portfolios from '../data/portfolio';
import Title from '../Components/Title';
import Menu from '../Components/Portfolio/Menu';
import Button from '../Components/Portfolio/Button';

function PortfolioPage() {
    const allButtons = ['All', ...new Set( portfolios.map(item => item.category) )];
    // States
    const [menuItem, setMenuItem] = useState(portfolios);
    const [button, setButton] = useState(allButtons);

    // Función para filtrar
    const filter = (button) => {

        if(button === 'All') {
            setMenuItem(portfolios);
            return;
        }

        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItem(filteredData);
    };

    return (
        <MainLayout>
            <Title title="Portfolio" span="Portfolio" />
            <InnerLayout>
                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfolioPage
