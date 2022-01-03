import { useState } from "react";
import { Route, Switch as Switching } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
//Components
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import SkillsPage from "./Pages/SkillsPage";
import ResumePage from "./Pages/ResumePage";
import PortfolioPage from "./Pages/PortfolioPage";
import BlogsPage from "./Pages/blog/BlogsPage";
import EntradaPage from "./Pages/blog/EntradaPage";
import ContactPage from "./Pages/ContactPage";
import MenuIcon from "@material-ui/icons/Menu";
// import Switch from "@material-ui/core/Switch";
// import Brightness4Icon from "@material-ui/icons/Brightness4";
import { IconButton } from "@material-ui/core";

function App() {
//   const [theme, setTheme] = useState("dark-theme");
//   const [checked, setChecked] = useState(false);

//   useEffect(() => {
//     document.documentElement.className = theme;
//   }, [theme]);

//   const themeToggler = () => {
//     if (theme === "light-theme") {
//       setTheme("dark-theme");
//       setChecked(!checked);
//     } else {
//       setTheme("light-theme");
//       setChecked(!checked);
//     }
//   };

  //Hamburguer
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />

      {/* <div className="light-dark-mode">
        <div className="left-contet">
          <Brightness4Icon />
        </div>
        <div className="right-contet">
          <Switch
            value=""
            checked={checked}
            inputProps={{ "arial-label": "" }}
            size="medium"
            onClick={themeToggler}
          />
        </div>
      </div> */}

      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>

        <Switching>
          <Route path="/" exact>
            <HomePage />
            <AboutPage />
            <ResumePage />
            <SkillsPage />
            <PortfolioPage />
            <BlogsPage />
            <ContactPage />
          </Route>

          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/skills" exact>
            <SkillsPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/portfolio" exact>
            <PortfolioPage />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
          <Route path="/blogs/:id" exact>
            <EntradaPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switching>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px){
      margin-left: 0;
    }
  }
`;

export default App;
