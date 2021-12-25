import React from 'react';
import styled from 'styled-components';
import { InnerLayout} from '../styles/Layouts';
import Title from './Title';
import SkillCard from './SkillCard';
import { SkillData } from '../data/DataSkills';
// Imgs:
import react from '../img/logos/react.png';
import javascript from '../img/logos/javascript.png';
import html from '../img/logos/html.png';
import css from '../img/logos/css.png';

function SkillsSection() {
    return (
        <InnerLayout>
            <SkillsSectionStyled>
                <Title title="Skills" span="Skills" />
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
        margin-top: 2rem;
        width: 90%;
    }
`;

export default SkillsSection;
