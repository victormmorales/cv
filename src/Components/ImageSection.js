import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
// Img
import resume from "../img/resume.jpg";

function ImageSection() {
    // Fecha:
  const year = new Date().getFullYear();

  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>Soy <span>Víctor Ruiz</span></h4>

        <p className="paragraph">
          Soy un apasionado por el desarrollo de software que busca seguir
          creciendo dentro del sector IT.
          <br />
          <br />
          Mi deseo es pertenecer a una empresa que me guíe en mi crecimiento
          profesional, a la que pueda aportar toda mi dedicación así como mis
          conocimientos y habilidades.
        </p>

        <div className="about-info">
          <div className="info-title">
            <p>Nombre Completo</p>
            <p>Edad</p>
            <p>Nacionalidad</p>
            <p>Ciudad</p>
            <p>Idioma</p>
            <p>Servicios</p>
          </div>
          <div className="info">
            <p>: Víctor Manuel Morales Ruiz</p>
            <p>: {year - 1992}</p>
            <p>: Español</p>
            <p>: Madrid</p>
            <p>: Español, Inglés</p>
            <p>: Full Stack Developer</p>
          </div>
        </div>
        <PrimaryButton title="Descargar CV" />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
