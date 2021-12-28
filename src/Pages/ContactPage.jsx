import React from 'react';
import styled from 'styled-components';
import{ MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
// import PhoneIcon from '@mui/icons-material/Phone';
// // import EmailIcon from '@mui/icons-material/Email';
// // import Location from '@mui/icons-material/Location';
import ContacItem from '../Components/ContacItem';

function ContactPage() {
    return (
        <MainLayout>
            <Title title="Contacto" span="Contact0" />
            <ContactStyled>
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
                        {/* <ContacItem icon={PhoneIcon} title="Teléfono" contact="+34 617 688 877" /> */}
                    </div>
                </InnerLayout>
            </ContactStyled>
        </MainLayout>
    )
};

const ContactStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        .contact-title {
            h4{
                padding: 1rem 0;
                font-size: 1.8rem;
                span{
                    font-size: 1.8rem;
                }
            }
        }
        .form {
            width: 100%;
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
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
`;

export default ContactPage
