import React from 'react';
import { useParams } from "react-router";
import { MainLayout } from '../../styles/Layouts';
import Title from '../../Components/Title';
import blogs from '../../data/blogs';

function EntradaPage() {
    const { id } = useParams();

    return (
        blogs.map(({ _id, title, date, imagePrincipal, text }) => (
            id === _id &&
            <MainLayout key={_id}>
                <Title title={title} span={title} />
                <div className='image'>
                    <img src={imagePrincipal} alt="img-blog" />
                </div>
            </MainLayout>
        ))
    )
}

export default EntradaPage
