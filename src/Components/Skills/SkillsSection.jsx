import React from 'react';
import styled from 'styled-components';
import { InnerLayout} from '../../styles/Layouts';
import SkillCard from './SkillCard';
import { SkillData } from '../../data/DataSkills';
// // Imgs:
// import react from '../img/logos/react.png';
// import javascript from '../img/logos/javascript.png';
// import html from '../img/logos/html.png';
// import css from '../img/logos/css.png';

function SkillsSection() {
    return (
        <InnerLayout>
            <SkillsSectionStyled>
                <div className='services'>
                    {SkillData.map(({ image, text }, i) => (
                        <SkillCard
                        image={image}
                        title={text}
                        key={i}
                    />
                    ))}
                </div> 
            </SkillsSectionStyled>
        </InnerLayout>
    )
}

const SkillsSectionStyled = styled.section`
    .services{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        padding: 3rem;
        @media screen and (max-width: 1200px) {
            grid-template-columns: repeat(3, 1fr);
            margin-top: 0;
        }
        @media screen and (max-width: 500px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;

export default SkillsSection;
