import React from 'react'
import Particle from '../Components/Particles';
import styled from 'styled-components';
import Typical from 'react-typical';
import { LinkedIn, GitHub, Instagram } from '@material-ui/icons';

function HomePage() {
    return (
        <HomePageStyled>
            <div className='p-particles-js'>
                <Particle />
            </div>
            <div className='typography'>
                <h1>Hola, soy <span>Víctor</span></h1>
                <h2>
                    <Typical
                        loop={Infinity}
                        steps={["Full Stack Developer", 1000, "MERN Stack Dev", 1000,]}
                    />
                </h2>
                <p>Soy un apasionado por el desarrollo de software que busca seguir creciendo dentro del sector IT.<br/>
                   
                Mi deseo es pertenecer a una empresa que me guíe en mi crecimiento profesional, a la que pueda aportar
                   toda mi dedicación así como mis conocimientos y habilidades.
                </p>
                <div className='icons'>
                    <div className='icon i-linkedin'>
                        <a href='https://www.linkedin.com/in/victormmorales/' target="_blank" rel="noreferrer"><LinkedIn /></a>
                    </div>
                    <div className='icon i-github'>
                        <a href='https://github.com/militroncho7' target="_blank" rel="noreferrer"><GitHub /></a>
                    </div>
                    <div className='icon i-instagram'>
                        <a href='https://www.instagram.com/militroncho7/' target="_blank" rel="noreferrer"><Instagram /></a>
                    </div>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    .p-particles-js {
        position: absolute;
        top: 0;
        left: 0;
    }
    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        p{
            margin-bottom: 1rem;
            span{
                color: var(--font-light-color);
                font-size: 1.1rem;
                margin: 0;
            }
        }
        .icons{
            display: flex;
            justify-content: center;
            .icon {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 2rem 0;
                transition: all 0.4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border-bottom: 2px solid var(--border-color);
                }
                svg{
                    font-size: 2rem;
                    margin: 0 0.5rem;
                    transition: all 0.4s ease-in-out;
                    /* &:hover{
                        color: var(--primary-color);
                    } */
                }
            }
            .i-linkedin{
                &:hover{
                    color: #0032ec;
                }
            }
            .i-github{
                &:hover{
                    color: #b1fffb;
                }
            }
            .i-instagram{
                &:hover{
                    color: #dc3663;
                }
            }
        }
    }
`;

export default HomePage
