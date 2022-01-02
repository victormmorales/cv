import React from 'react';
import { MainLayout } from '../styles/Layouts';
import Resume from '../Components/Resume/Resume';
// import Skill from '../Components/Skills/Skill';

function ResumePage() {
    return (
        <MainLayout>
            {/* <Skill /> */}
            <Resume />
        </MainLayout>
    )
}

export default ResumePage
