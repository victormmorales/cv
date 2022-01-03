import { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link, useLocation } from "react-router-dom";
import { LinkedIn, GitHub, Instagram } from '@material-ui/icons';
import avatar from '../img/hero.jpg';

import Switch from '@material-ui/core/Switch';
import Brightness4Icon from '@material-ui/icons/Brightness4';

function Navbar() {

    const [ theme, setTheme ] = useState('dark-theme');
    const [ checked, setChecked] = useState(false);

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    const themeToggler = () => {
        if( theme === 'light-theme') {
          setTheme('dark-theme');
          setChecked(!checked);
        } else {
            setTheme('light-theme');
            setChecked(!checked);
        }
    };

    const location = useLocation();
    
    const year = new Date().getFullYear();

    return (
        <NavbarStyled>
            <div className="avatar">
                <Link to="/"><img src={avatar} alt=""/></Link>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <Link to="/" exact="true" className={location.pathname ===  '/' ? 'active' : null }>Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" exact="true" className={location.pathname ===  '/about' ? 'active' : null }>Sobre mí</Link>
                </li>
                <li className="nav-item">
                    <Link to="/resume" exact="true" className={location.pathname ===  '/resume' ? 'active' : null }>Curriculum</Link>
                </li>
                <li className="nav-item">
                    <Link to="/skills" exact="true" className={location.pathname ===  '/skills' ? 'active' : null }>Skills</Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio" exact="true" className={location.pathname ===  '/portfolio' ? 'active' : null }>Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/blogs" exact="true" className={location.pathname ===  '/blogs' ? 'active' : null }>Blogs</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" exact="true" className={location.pathname ===  '/contact' ? 'active' : null }>Contacto</Link>
                </li>
            <div className="light-dark-mode-nav">
                <div className="left-contet">
                    <Brightness4Icon />
                </div>
                <div className="right-contet">
                    <Switch
                    value=""
                    checked={checked}
                    inputProps={{ 'arial-label': ''}}
                    size="medium"
                    onClick={themeToggler}
                    />
                </div>
            </div>
            </ul>


            <footer className="footer">
                <p>Víctor Ruiz {year}©</p>

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
            </footer>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
    .avatar{
        width: 80%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 100%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
            transition: all .4s ease-in-out; 
            &:hover{
                border: 8px solid var(--primary-color);
            }
        }
    }
    .nav-items{
        width: 100%;
        text-align: center;  
        display: flex;
        flex-direction: column; 
        li{
            display: block;
            .active{
            background-color: var(--primary-color-light);
            color: white;
            }
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    opacity: 0.21;
                    z-index: -1;
                }
            }
            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
        .light-dark-mode-nav{
            margin: 3rem auto 0;
            width: 6.5rem;
            height: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                display: flex;
                align-items: center;
                font-size: 1.7rem;
                color: var(--white-color);
            }
        }
    }
    footer{
        border-top: 1px solid var(--border-color);
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icons{
            margin: 0.5rem 0;
            display: flex;
            svg{
                margin: 0 0.5rem;
                &:hover{
                    color: white;
                }
            }
        }
        p{
            font-size: 0.8rem;
            display: block;
            text-align: center;
            margin-top: 0.5rem;
        }
    }
`;
export default Navbar;