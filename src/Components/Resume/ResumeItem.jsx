import React from 'react'
import styled from 'styled-components'

function ResumeItem({ year, title, url,  logo, tecnol, funct1, funct2, funct3, funct4, funct5, funct6 }) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <a href={url} target="_blank" rel="noreferrer">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                </a>
                <p>{tecnol}</p>
                <p>{funct1}</p>
                <p>{funct2}</p>
                <p>{funct3}</p>
                <p>{funct4}</p>
                <p>{funct5}</p>
                <p>{funct6}</p>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    padding: 1rem;
    width: 70%;
    &:last-child{
        margin-bottom: 3rem;
    }
    .left-content{
        width: 20%;
        padding: 0 2rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: -27px;
            top: 25px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        p{
            margin-top: 1rem;
            display: inline-block;
            &:hover{
                color: var(--white-color);
            }
        }
    }
    .right-content{
        padding: 2rem 2rem;
        margin-left: 2rem;
        /* background-color: var(--background-dark-grey); */
        border-left: 2px solid var(--border-color);
        position: relative;
        &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 15%;
            height: 2px;
            width: 1.5rem;
            background-color: var(--border-color);
        }
        &:hover{
            border-left: 2px solid var(--primary-color);
            background-color: var(--background-dark-grey);
            box-shadow: 0px 0px 23px 4px var(--box-shadow);
            transform: scale(1.02);
        }
        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .4rem;
        }
        .logo{
            max-height: 15%;
            margin: 0.5rem 0;
            cursor: pointer;
        }
        /* h6{
            font-size: 1.5rem;
            padding-bottom: .4rem;
        } */
    }
`;

export default ResumeItem
