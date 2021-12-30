import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';

function Sidebar() {
    return (
        <SidebarStyled>
            <Navbar />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    z-index: 100;
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
`;

export default Sidebar
