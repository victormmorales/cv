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
        svg{
            font-size: 1.5rem;
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
    }
`;

export default ContacItem
