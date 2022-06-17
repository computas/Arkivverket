import React, { useState } from 'react';
import './Home.scss';
import { Button } from 'react-bootstrap'
function Home() {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  function startDiv() {
    setIsVisible(!isVisible)
    console.log("ee")
  }

    return (
        <div className="home">
          <h1>Home</h1>
          <div className='btn-div'>
            <h2>Testbutton</h2>
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
          
        </div>
      );
}

export default Home;