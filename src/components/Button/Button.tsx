import * as React from "react";
import "./Button.scss";
import Button from 'react-bootstrap/Button';

interface IProps {
    name: string;
}

export default class Banner extends React.Component<IProps> {
    public render() {
        return (
            <Button className="button">
                {this.props.name}
            </Button>
        );
    }
}