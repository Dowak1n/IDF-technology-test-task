import React from "react";
import SingUpInfo from "./pages/SingUpInfo";
import PersonalInfo from "./pages/PersonalInfo";
import logo from "./assets/IDF.svg";
import styled from "styled-components";
import "./styles/App.scss";

// Styles-component
const Header = styled.header`
  max-height: 200px;
  padding: 1rem;
  background-color: #16a085;
`;

function App() {
  return (
    <div className="page">
      <Header>
        <header>
          <img src={logo} width="100" height="50" alt="image description" />
        </header>
      </Header>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="bread-crumbs">
        <ul id="breadcrumbs">
          <li>
            <a id="stage1" className="ready">
              SingUpInfo
            </a>
          </li>
          <li>
            <a className="not-ready" id="stage2">
              PersonalInfo
            </a>
          </li>
        </ul>
      </div>
      <SingUpInfo />
      <PersonalInfo />
      <footer>
        <img src={logo} width="100" height="50" alt="image description" />
      </footer>
    </div>
  );
}

export default App;
