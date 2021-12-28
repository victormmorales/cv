import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title';
import { MainLayout } from '../styles/Layouts';
import SkillsSection from '../Components/SkillsSection';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title  title='Skills' span='Skills' />
                <SkillsSection />
            </AboutStyled>
        </MainLayout>
    )
};

const AboutStyled = styled.section`

`;

export default AboutPage
