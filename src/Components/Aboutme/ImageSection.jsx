import React from "react";
import styled from "styled-components";
import PrimaryButton from "../PrimaryButton";
// Img
import resume from "../../img/resume.jpg";

function ImageSection() {
  const year = new Date().getFullYear();

  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>Para conocerme un poco <span>más...</span></h4>

        <p className="paragraph">
        ¡Hola! soy <span>Víctor</span>👋🏽 Desarrollador Web Full Stack.
        <br/>
        Me apasiona el mundo del diseño y experiencia de usuario 👨🏻‍💻.
        <br/>
        Siempre que desarrollo un proyecto trato de ofrecer la mejor experiencia de usuario.
        <br/>
        Procuro que todos mis desarrollos sean únicos y que aporten algo distinto.
        <br/>
        ¡Siempre Responsive! 📲 😏
        <br/>
        Desarrollo con Buenas Prácticas: <span>Clean Code, Pair Programming, TDD</span>
        <br/>
        Mis herramientas ⚙️ <br/>
        - <span>Visual Studio Code, Git, GitHub, Notion</span>
        </p>

        <div className="about-info">
          <div className="info-title">
            <p>Nombre</p>
            <p>Apellidos</p>
            <p>Edad</p>
            <p>Nacionalidad</p>
            <p>Ciudad</p>
            <p>Idioma</p>
          </div>
          <div className="info">
            <p>: Víctor Manuel</p>
            <p>: Morales Ruiz</p>
            <p>: {year - 1992}</p>
            <p>: Español</p>
            <p>: Madrid</p>
            <p>: Español</p>
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
  .left-content {
    width: 60%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 1.8rem;
      color: var(--white-color);
      span {
        font-size: 1.8rem;
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
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  @media screen and (max-width: 600px) {
    .left-content {
    width: 100%;
    }
    .right-content {
      h4 {
        font-size: 1.3rem;
        span{
          font-size: 1.3rem;
        }
      }
      .about-info {
        margin: 1.5rem auto;
        .info-title {
        padding-right: 0.5rem;
        p{
          font-size: 1rem;
        }
        }
      }
    }
  }
`;
export default ImageSection;
