import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import SmallTitle from './SmallTitle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import ResumeItem from './ResumeItem';
// Logos:
import FasrevLogo from '../img/logos/fasrev.png';
import EciLogo from '../img/logos/eci.png';

function Resume() {
    return (
        <ResumeStyled>
            <Title title="Curriculum" span="Curriculum" />
            <InnerLayout>
                {/* Experiencia laboral */}
                <div className="small-title">
                    <SmallTitle icon={<FontAwesomeIcon icon={faBriefcase}/>} title="Experiencia" />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year="Mayo 2021 - Actualidad"
                        title="Full Stack Developer"
                        url='https://fasrev.es/'
                        logo={FasrevLogo}
                        tecnol="ReactJS - MongoDB - Express - NodeJS - SASS - ThreeJS"
                        funct1="- Desarrollar la arquitectura del sitio web"
                        funct2="- Diseñar las interfaces de usuario y otros elementos front-end"
                        funct3="- Desarrollar aplicaciones back-end"
                        funct4="- Crear servidores y bases de datos para correcta funcionalidad"
                        funct5="- Asegurar funcionamiento de la aplicación o sitio en teléfonos móviles"
                        funct6="- Integración elementos 3D: ThreeJS"
                    />
                    <ResumeItem
                        year="Marzo 2020 - Mayo 2021"
                        title="Coordinador"
                        url="https://www.elcorteingles.es/"
                        logo={EciLogo}
                        tecnol="Dpto. Compras:"
                        funct1="- Coordinación del equipo de trabajo"
                        funct2="- Responsable de implantaciones de la división"
                        funct3="- Análisis de la rentabilidad del espacio y de la venta por ubicación"
                        funct4="- Planificación y rentabilización de los surtidos"
                        funct5="- Construcción de itinerarios de venta"
                        funct6="- Comunicación con proveedores y responsables de los centros (a nivel nacional)"
                    />
                    <ResumeItem
                        year="Julio 2016 - Marzo 2020"
                        title="Auxiliar"
                        url="https://www.elcorteingles.es/"
                        logo={EciLogo}
                        tecnol="Dpto. Compras:"
                        funct1="- Diseño de Layouts"
                        funct2="- Responsable de implantaciones de la categoría"
                        funct3="- Análisis de la rentabilidad del espacio y de la venta por ubicación"
                        funct4="- Rentabilización de los surtidos"
                        funct5="- Construcción de itinerarios de venta"
                        funct6="- Comunicación responsables de los centros (Comunidad de Madrid)"
                    />
                </div>

                {/* Formación */}
                <div className="small-title">
                    <SmallTitle icon={<FontAwesomeIcon icon={faGraduationCap}/>} title="Formación" />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year="Mayo 2021 - Actualidad"
                        title="Full Stack Developer"
                        url='https://fasrev.es/'
                        logo={FasrevLogo}
                        tecnol="ReactJS - MongoDB - Express - NodeJS - SASS - ThreeJS"
                        funct1="- Desarrollar la arquitectura del sitio web"
                        funct2="- Diseñar las interfaces de usuario y otros elementos front-end"
                        funct3="- Desarrollar aplicaciones back-end"
                        funct4="- Crear servidores y bases de datos para correcta funcionalidad"
                        funct5="- Asegurar funcionamiento de la aplicación o sitio en teléfonos móviles"
                        funct6="- Integración elementos 3D: ThreeJS"
                    />
                    <ResumeItem
                        year="Marzo 2020 - Mayo 2021"
                        title="Coordinador"
                        url="https://www.elcorteingles.es/"
                        logo={EciLogo}
                        tecnol="Dpto. Compras:"
                        funct1="- Coordinación del equipo de trabajo"
                        funct2="- Responsable de implantaciones de la división"
                        funct3="- Análisis de la rentabilidad del espacio y de la venta por ubicación"
                        funct4="- Planificación y rentabilización de los surtidos"
                        funct5="- Construcción de itinerarios de venta"
                        funct6="- Comunicación con proveedores y responsables de los centros (a nivel nacional)"
                    />
                    <ResumeItem
                        year="Julio 2016 - Marzo 2020"
                        title="Auxiliar"
                        url="https://www.elcorteingles.es/"
                        logo={EciLogo}
                        tecnol="Dpto. Compras:"
                        funct1="- Diseño de Layouts"
                        funct2="- Responsable de implantaciones de la categoría"
                        funct3="- Análisis de la rentabilidad del espacio y de la venta por ubicación"
                        funct4="- Rentabilización de los surtidos"
                        funct5="- Construcción de itinerarios de venta"
                        funct6="- Comunicación responsables de los centros (Comunidad de Madrid)"
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 2rem;
        margin-top: 4rem;
    }
    .resume-content {
        border-left: 2px solid var(--border-color);
    }
`;

export default Resume