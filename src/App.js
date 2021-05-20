import React from "react";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// import './components/Config/reactotron';
import GlobalStyle from "./styles/global";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";
import Routes from "./components/routes";
// import store from "./components/store";

import { Wrapper, Container, Content } from "./styles/components";

const App = () => (
    <BrowserRouter>
        <Wrapper>
            <Container>
                <Sidebar />
                <Content>
                    <Header />
                    <Routes />
                </Content>
            </Container>
            <Player />
            <GlobalStyle />
        </Wrapper>
    </BrowserRouter>
);

export default App;
