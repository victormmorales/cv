import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import SmallTitle from './SmallTitle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import ResumeItem from './ResumeItem';

function Resume() {
    return (
        <ResumeStyled>
            <Title title="Curriculum" span="Curriculum" />
            <InnerLayout>
                <SmallTitle icon={<FontAwesomeIcon icon={faBriefcase}/>} title="Experiencia" />
                <div className="resume-content">
                    <ResumeItem
                        year="May 2021 - Actualidad"
                        title="Full Stack Developer"
                        subtitle="Fasrev Spain"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nobis,"
                    />
                </div>
                <SmallTitle icon={<FontAwesomeIcon icon={faGraduationCap}/>} title="Formación" />
                <div className="resume-content"></div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section``;

export default Resume
