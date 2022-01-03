import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title';
import { MainLayout } from '../styles/Layouts';
import ImageSection from '../Components/Aboutme/ImageSection';
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

export default AboutPage
