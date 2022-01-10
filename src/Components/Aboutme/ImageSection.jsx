import React from "react";
import styled from "styled-components";
// import PrimaryButton from "../PrimaryButton";
import resume from "../../img/resume.jpg";

function ImageSection() {
  // const year = new Date().getFullYear();

  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>Para conocerme un poco <span>más...</span></h4>

        <p className="paragraph">
        ¡Hola! 👋🏽  Para no hacerlo muy largo, me presento. Soy <span>Víctor</span> y trabajo como Full Stack Developer.
        <br/>
        Siempre supe que quería dedicarme a algo relacionado con la tecnología, aunque no fue hasta hace no mucho tiempo que decidí entrar en el mundo IT de la mano de la programación web, y bajo el Stack <span>MERN</span>. 👨🏻‍💻
        <br/>
        A pesar de esto, y a través de mis ganas de progresar y de avanzar, he seguido aprendiendo y buscando nuevos lenguajes y frameworks que conocer. (Redux, ThreeJS... y un largo etcétera de cursos en mi carrito de la compra). 📚
        <br/>
        Procuro que todos mis desarrollos sean únicos y que aporten algo distinto. Me apasiona el mundo del diseño y experiencia de usuario . Eso sí ¡Siempre Responsive! 📲 😏 
        <br/>
        Sin duda este no es el fin de mi aprendizaje dentro del mundo IT, me encanta, el branding dentro de las marcas, el diseño, el UX/UI, la automatización y ese mundo cada vez más en auge que son las criptomonedas. 🕹
        <br/>
        Desarrollo con Buenas Prácticas: <span>Clean Code, Pair Programming, TDD</span>
        <br/>
        <br/>
        Mis herramientas ⚙️ <br/>
        - <span>Visual Studio Code, Git, GitHub, Notion</span>
        </p>

        <div className="about-info">
          <div className="info-title">
            <p>- Nombre: Víctor Manuel</p>
            <p>- Apellidos: Morales Ruiz</p>
            {/* <p>Edad</p> */}
            <p>- Nacionalidad: Española</p>
            <p>- Ciudad: Madrid</p>
            <p>- Idioma: Español</p>
          </div>
          {/* <div className="info">
            <p>: Víctor Manuel</p>
            <p>: Morales Ruiz</p>
            <p>: {year - 1992}</p>
            <p>: Español</p>
            <p>: Madrid</p>
            <p>: Español</p>
          </div> */}
        </div>
        <a
          href="https://drive.google.com/file/d/1FceWVFptOxktAtBI8c_FLMNXc3BTvgEx/view?usp=sharing"
          download="CV-Victor"
          target='_blank'
          rel="noreferrer"
          >Descargar CV</a>
        {/* <PrimaryButton title="Descargar CV" type="submit" /> */}
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .left-content {
    width: 60%;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
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
    a{
    background-color: var(--primary-color);
    padding: 0.8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    &::after{
        content: "";
        position: absolute;
        width: 0%;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: 0.7;
    }
    &:hover::after{
        width: 100%;
        height: 0.2rem;
        background-color: var(--white-color);
        transition: all .4s ease-in-out;
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
}
`;

export default ImageSection;
