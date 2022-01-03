import { useState, useEffect } from "react";
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
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { IconButton } from "@material-ui/core";

function App() {

  const [ theme, setTheme ] = useState('dark-theme');
  const [ checked, setChecked] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if( theme === 'light-theme') {
      setTheme('dark-theme');
      setChecked(!checked);
    } else {
        setTheme('light-theme');
        setChecked(!checked);
    }
  };

  return (
    <div className="App">
      <Sidebar />

      <div className="light-dark-mode">
        <div className="left-contet">
          <Brightness4Icon />
        </div>
        <div className="right-contet">
          <Switch
            value=""
            checked={checked}
            inputProps={{ 'arial-label': ''}}
            size="medium"
            onClick={themeToggler}
          />
        </div>
      </div>

      <div className="ham-burguer-menu">
          <IconButton>
              <MenuIcon />
          </IconButton>
      </div> 

      <MainContentStyled>
        {/* <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div> */}
        
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
  /* .lines {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    } */
  }
`;

export default App;
