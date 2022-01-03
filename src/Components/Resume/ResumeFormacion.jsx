import React from 'react'
import styled from 'styled-components'

function ResumeFormacion({ year, title, url,  logo, tecnol }) {
    return (
        <ResumeFormacionStyled>
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
            </div>
        </ResumeFormacionStyled>
    )
}

const ResumeFormacionStyled = styled.div`
    display: flex;
    padding: 1rem;
    width: 100%;
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
        padding: 1rem 2rem;
        border-left: 2px solid var(--border-color);
        margin-left: 2rem;
        position: relative;
        &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 20%;
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
        p{
            margin-top: 2rem;
            margin-bottom: -1rem;
        }
    }
    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        .left-content{
            width: 100%;
            margin-bottom: 0.5rem;
        }
        .right-content{
            padding: 1rem;
            margin-left: 1rem;
            border-left: none;
            &::before{
                content: '';
                position: relative;
                left: 0;
                top: 0;
                height: 0;
                width: 0;
                background-color: none;
            }
            h5 {
                font-size: 1.5rem;
                width: 100%;
            }
            p{
                font-size: 1rem;
                margin-top: 0.5rem;
            }
        }
    }
`;

export default ResumeFormacion
