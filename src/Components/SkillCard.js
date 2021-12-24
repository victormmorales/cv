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
