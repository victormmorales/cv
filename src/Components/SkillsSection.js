import React from 'react';
import styled from 'styled-components';
import { InnerLayout} from '../styles/Layouts';
import Title from './Title';
import SkillCard from './SkillCard';
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
                    {/* Fila 1 */}
                    <SkillCard
                        image={react}
                        title="ReactJS"
                    />
                    <SkillCard
                        image={javascript}
                        title="JavaScript"
                    />
                    <SkillCard
                        image={html}
                        title="HTML5"
                    />
                    <SkillCard
                        image={css}
                        title="CSS"
                    />
                    {/* Fila 2 */}
                    <SkillCard
                        image={react}
                        title="ReactJS"
                    />
                    <SkillCard
                        image={javascript}
                        title="JavaScript"
                    />
                    <SkillCard
                        image={html}
                        title="HTML5"
                    />
                    <SkillCard
                        image={css}
                        title="CSS"
                    />
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
