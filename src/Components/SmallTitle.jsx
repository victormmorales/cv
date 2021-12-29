import React from 'react'
import styled from 'styled-components'

function SmallTitle({icon, title}) {
    return (
        <SmallTitleStyled>
            <p>{icon}</p>
            <h3>{title}</h3>
        </SmallTitleStyled>
    )
};

const SmallTitleStyled = styled.div`
    display: flex;
    align-items: center;
    &:hover{
        color: var(--white-color);
    }
    p{
        padding-right: 1rem;
        svg{
            font-size: 2.5rem;
        }
    }
    h3{
        font-size: 2rem;
    }
`;

export default SmallTitle
