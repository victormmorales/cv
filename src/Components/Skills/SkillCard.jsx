import React from 'react'
import styled from 'styled-components'

function SkillCard({ image, title }) {
    return (
        <SkillCardStyled>
            <div className='container'>
                <img src={image} alt="img" />
                <h4>{title}</h4>
            </div>
        </SkillCardStyled>
    )
}

const SkillCardStyled = styled.div`
    background-color: var(--background-dark-grey);
    margin: 1rem;
    /* border: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color); */
    border-left: 2px solid var(--border-color);
    transition: all .2s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 23px 4px var(--box-shadow);
        /* border-top: 8px solid var(--primary-color); */
        border-left: 2px solid var(--primary-color);
        transform: scale(1.02);
    }
    .container{
        width: 100%;
        padding: 1.2rem;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        img{
            max-width: 30%;
            padding-bottom: 1rem;
        }
        h4{
            color: var(--white-color);
            position: relative;
            padding-bottom: 0.5rem;
            &::after{
                content: "";
                width: 45%;
                height: 4px;
                background-color: var(--border-color);
                position: absolute;
                right: 0;
                bottom: 0;
            }
        }
    }
`;

export default SkillCard;
