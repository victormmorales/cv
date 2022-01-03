import React, { useState } from 'react'
import { MainLayout, InnerLayout } from '../styles/Layouts';
import portfolios from '../data/portfolio';
import Title from '../Components/Title';
import Menu from '../Components/Portfolio/Menu';
import Button from '../Components/Portfolio/Button';
import styled from 'styled-components';

function PortfolioPage() {
    const allButtons = ['All', ...new Set( portfolios.map(item => item.category) )];
    // States
    const [menuItem, setMenuItem] = useState(portfolios);
    // eslint-disable-next-line
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
            <PortfolioStyled>
                <Title title="Portfolio" span="Portfolio" />
                <InnerLayout>
                    <Button filter={filter} button={button} />
                    <Menu menuItem={menuItem} />
                </InnerLayout>
            </PortfolioStyled>
        </MainLayout>
    )
}

const PortfolioStyled = styled.div`
    @media screen and (max-width:500px){
        h2{
            font-size: 1.8rem;
            span{
                opacity: 0.3;
                font-size: 2.2rem;
            }
        }
    }
`;

export default PortfolioPage
