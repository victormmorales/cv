import React from 'react';
import Resume from '../Components/Resume';
import Skill from '../Components/Skill';
import { MainLayout } from '../styles/Layouts';
// import Title from '../Components/Title';

function ResumePage() {
    return (
        <MainLayout>
            <Skill />
            <Resume />
        </MainLayout>
    )
}

export default ResumePage
