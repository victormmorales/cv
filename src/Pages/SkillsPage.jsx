import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title';
import { MainLayout } from '../styles/Layouts';
import SkillsSection from '../Components/Skills/SkillsSection';

function AboutPage() {
    return (
        <MainLayout>
            <SkillsStyled>
                <Title  title='Skills' span='Skills' />
                <SkillsSection />
            </SkillsStyled>
        </MainLayout>
    )
};

const SkillsStyled = styled.section`
    @media screen and (max-width:500px){
        h2{
            font-size: 2rem;
            span{
                font-size: 2rem;
            }
        }
    }
`;

export default AboutPage
