import React from 'react'
import styled from 'styled-components'

function Title({ title, span }) {
    return (
        <TitleStyled>
            <h2>{title} <span>{span}</span></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 3rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        &::before{
            content: '';
            position: absolute;
            bottom: 0;
            width: 15%;
            height: 0.3rem;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
            left: 0;
        }
        &::after{
            content: '';
            position: absolute;
            bottom: 0;
            width: 5%;
            height: 0.3rem;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;
        }
        span{
            font-weight: 900;
            color: rgba(25,29,42,0.44);
            font-size: 5.1rem;
            position: absolute;
            left: 1%;
            top: 10%;
            z-index: -1;
        }
    }
`;

export default Title
