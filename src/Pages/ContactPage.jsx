import React from 'react';
import styled from 'styled-components';
import{ MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
// // import EmailIcon from '@mui/icons-material/Email';
// // import Location from '@mui/icons-material/Location';
import ContacItem from '../Components/Contact/ContacItem';

function ContactPage() {
    return (
        <MainLayout>
            <ContactStyled>
                <Title title="Contacto" span="Contact0" />
                <InnerLayout className='contact-section'>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>¿Nos tomamos un <span>café</span>?</h4>
                        </div>
                        <form className="form">
                            <div className="form-field">
                                <label htmlFor="name">Tu nombre</label>
                                <input type="text" id="name"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Tu email</label>
                                <input type="email" id="email"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor=''>Mensaje</label>
                                <textarea name="textarea" id="30" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field">
                                <PrimaryButton title="Enviar" />
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContacItem icon={<FontAwesomeIcon icon={faPhone}/>} title="Teléfono" contact1="+34 617 688 877" />
                        <ContacItem icon={<FontAwesomeIcon icon={faEnvelope}/>} title="Email" contact1="vm.moralesruiz@gmail.com" />
                        <ContacItem icon={<FontAwesomeIcon icon={faMapMarkedAlt}/>} title="Ubicación" contact1="Madrid" />
                    </div>
                </InnerLayout>
            </ContactStyled>
        </MainLayout>
    )
};

const ContactStyled = styled.section`
    @media screen and (max-width:500px){
        h2{
            font-size: 2rem;
            span{
                font-size: 2rem;
            }
        }
    }
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        @media screen and (max-width:1200px) {
            grid-template-columns: repeat(1, 1fr);
        }
        .right-content{
            display: flex;
            flex-direction: column;
            /* justify-content: space-between; */
        }
        .left-content{
            @media screen and (max-width:1200px) {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .contact-title {
            h4{
                padding: 1rem 0;
                font-size: 1.8rem;
                span{
                    font-size: 1.8rem;
                }
                @media screen and (max-width:500px) {
                    font-size: 1.5rem;
                    span{
                        font-size: 1.5rem;
                    }
                }
            }
        }
        .form {
            width: 100%;
            @media screen and (max-width:500px) {
                width: 90%;
                margin-right: 1rem;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                @media screen and (max-width:1200px) {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 2rem;
                }
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    border-radius: 0 20px 0 20px;
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    border-radius: 0 20px 0 20px;
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: 0.8rem 1rem;
                }
            }
        }
    }
        }
        
`;

export default ContactPage
