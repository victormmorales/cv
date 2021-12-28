import React from 'react';
import styled from 'styled-components';
import{ MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';

function ContactPage() {
    return (
        <MainLayout>
            <Title title="Contact" span="Contact" />
            <ContactStyled>
                <InnerLayout className='contact-section'>
                    <div className="left-content">
                        <form className="form">
                            <div className="form-field">
                                <label htmlFor="name">Tu nombre</label>
                                <input type="text" id="name"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Tu email</label>
                                <input type="email" id="email"/>
                            </div>
                            <div className="text-area">
                                <label htmlFor=''>Mensaje</label>
                                <textarea name="textarea" id="30" cols="30" rows="10"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="right-content"></div>
                </InnerLayout>
            </ContactStyled>
        </MainLayout>
    )
};

const ContactStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        .form{
            margin-top: 0.2rem;
            position: relative;
            label{}
            input{
                border: 1px solid var(--boder-color);
                outline: none;
                background: transparent;
                height: 50px;
                padding: 0 15px;
            }
        }
    }
`;

export default ContactPage
