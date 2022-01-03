import React from 'react'
import styled from 'styled-components';

function Button({ filter, button }) {
    return (
        <ButtonStyled>
            { button.map((but, i) => (
                <button key={i} onClick={() => filter(but)}>
                    {but}
                </button>
            ))}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 2rem auto;
    button{
        outline: none;
        border: none;
        background-color: var(--background-light-color-2);
        /* background-color: var(--primary-color); */
        padding: .4rem 2rem;
        font-size: inherit;
        color: var(--white-color);
        cursor: pointer;
        transition: all .4s ease-in-out;
        &:active, &:focus,
        &:hover{
            background-color: var(--primary-color);
        }
        &:not(:last-child){
            margin-right: .6rem;
        }
    }
    @media screen and (max-width:1200px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 0 auto;
        button{
            width: 80%;
            margin-right: 0;
        }
    }
    @media screen and (max-width:1200px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: 0 auto;
        button{
            width: 100%;
            font-size: 1rem;
        }
    }
`;

export default Button
