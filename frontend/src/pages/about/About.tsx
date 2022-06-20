import React from 'react';
import './About.scss';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function About() {
    const navigateTo = useNavigate()
    return (
        <div className="About">
            <h1>About 2022</h1>
            <Button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={(e) => {
                    navigateTo("/")
                }}
            >
                To Home
            </Button>
        </div>
  );
}

export default About;