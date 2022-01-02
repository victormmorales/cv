import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import Title from '../Title';
import ProgressBar from '../ProgressBar';

function Skill() {
    return (
        <SkillStyled>
            <Title title="My Skills" span="My Skills" /> 
            <InnerLayout>
                <div className="skills">
                    <ProgressBar
                        title="HTML5"
                        width="70%"
                        text="70%"
                    />
                    <ProgressBar
                        title="HTML5"
                        width="90%"
                        text="90%"
                    />
                    <ProgressBar
                        title="HTML5"
                        width="60%"
                        text="60%"
                    />
                    <ProgressBar
                        title="HTML5"
                        width="85%"
                        text="85%"
                    />
                    <ProgressBar
                        title="HTML5"
                        width="70%"
                        text="70%"
                    />
                </div>
            </InnerLayout>
        </SkillStyled>
    )
};

const SkillStyled = styled.section`
    .skills {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }
`;

export default Skill
