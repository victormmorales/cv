import React from 'react';
import { useParams } from "react-router";
import styled from 'styled-components';
import { MainLayout } from '../../styles/Layouts';
import Title from '../../Components/Title';
import blogs from '../../data/blogs';

function EntradaPage() {
    const { id } = useParams();

    return (
        blogs.map(({ _id, title, date, imagePrincipal, textPrincipal, textSecundario, imageSecundaria }) => (
            id === _id &&
            <MainLayout key={_id}>
                <EntradaStyled>
                    <Title title={title} span={title} />
                    <p className='fecha'>{date}</p>
                    <div className='container'>
                        <div className="image">
                            <img src={imagePrincipal} alt="img-blog" />
                        </div>
                        <div className="textoPrincipal">
                            <p>{textPrincipal}</p>
                        </div>
                    </div>
                    <div className="textoSecundario">
                        <p>{textSecundario}</p>
                    </div>
                    <div className="imageSecundaria">
                        <img src={imageSecundaria} alt="img-secundaria" />
                    </div>
                    <p className='autor'>By: Víctor Ruiz ✌🏻😬</p>
                </EntradaStyled>
            </MainLayout>
        ))
    )
}

const EntradaStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .fecha{
        margin: 1rem 2rem;
    }
    .container {
        margin-top: 2rem;
        padding: 1rem 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        .image {
            width: 90%;
            img{
                width: 100%
            }
        }
        .textoPrincipal{
            text-align: center;
            p{
                font-size: 1rem;
            }
        }
    }
    .textoSecundario{
        text-align: center;
        margin-top: 1rem;
        p{
            font-size: 1rem;
        }
    }
    .imageSecundaria{
        margin: 2rem;
        width: 50%;
        img{
            width: 100%;
        }        
    }
    .autor{
        margin: 2rem 0;
        font-size: 0.8rem
    }
`;

export default EntradaPage
