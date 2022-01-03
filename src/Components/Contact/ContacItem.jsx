import React from 'react';
import styled from 'styled-components';

function ContacItem({ icon, title, contact1, contact2 }) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                <p>{icon}</p>
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{contact1}</p>
                <p>{contact2}</p>
            </div>
        </ContactItemStyled>
    )
};

const ContactItemStyled = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    @media screen and (max-width:500px) {
        padding: 0.5rem;
        display: grid;
        grid-template-columns: 15% 80%;
        gap: 5%
    }
    /* &:first-child{
        margin-top: 4rem;
    } */
    &:not(:last-child){
        margin-bottom: 2rem;
    }
    border-radius: 20px 0 20px 0;
    .left-content{
        padding: 1.5rem;
        border: 1px solid var(--border-color);
        border-radius: 100%;
        margin-right: 1.5rem;
        &:hover{
            border: 1px solid var(--primary-color);
        }
        svg{
            font-size: 1.5rem;
        }
        @media screen and (max-width:500px) {
            border: none;
            padding: 0 0.5rem;
            margin: 0;
        }
    }
    .right-content{
        h6{
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: 0.4rem;
        }
        p{
            padding: 0.1rem 0;
        }
        @media screen and (max-width:500px) {
            h6, p {
                font-size: 1rem;
            }
        }
    }
`;

export default ContacItem
