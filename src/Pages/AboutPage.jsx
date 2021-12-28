import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title';
import { MainLayout } from '../styles/Layouts';
import ImageSection from '../Components/ImageSection';
// import ReviewsSection from '../Components/ReviewsSection';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title  title='Sobre mí' span='Sobre mí' />
                <ImageSection />
                {/* <ReviewsSection /> */}
            </AboutStyled>
        </MainLayout>
    )
};

const AboutStyled = styled.section`

`;

export default AboutPage