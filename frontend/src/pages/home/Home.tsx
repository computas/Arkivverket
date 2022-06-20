import React, { useState } from 'react';
import './Home.scss';
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

function Home() {
    const navigateTo = useNavigate();
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function startDiv() {
        setIsVisible(!isVisible)
    }

    return (
        <div className="home">
            <h1>Home</h1>
            <div className='btn-div'>
                <h2>Test-button</h2>
                <Button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={(e) => {
                    startDiv()
                    }}
                    >
                    Click me
                </Button>
            </div>
            <div id='tester' style={{display: isVisible? 'block' : 'none'}}>
                <p>hello</p>
            </div>
            <Button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={(e) => {
                navigateTo("/about")
                }}
                >
                To About
            </Button>
        </div>
    );
}

export default Home;