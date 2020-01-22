import * as React from "react";
import "./MenuTop.scss";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class MenuTop extends React.Component<{}> {
    public render() {
        return (
            <Row className="menuTop justify-content-end align-items-md-center">
                <Col md={1}>.</Col>
            </Row>

        );
    }
}