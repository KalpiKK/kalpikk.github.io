import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import 'bootstrap/scss/bootstrap.scss';
import './styles/global.scss';
import MenuTop from "./components/MenuTop/MenuTop";
import Container from 'react-bootstrap/Container';

ReactDOM.render(
    <Container className="appClass" fluid={true}>
        <MenuTop/>
    </Container>,
    document.getElementById("app"),
);