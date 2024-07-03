import React, { useState, useEffect } from 'react';

const SevenSegmentDisplay = ({ digit }) => {
  
  const [currentDigit, setCurrentDigit] = useState(digit);

  useEffect(() => {
    setCurrentDigit(digit);
  }, [digit]);

  useEffect(() => {
    function applyNumber(boxTopColor, boxTopLeftColor, boxTopRightColor, boxCenterColor, boxBottomLeftColor, boxBottomRightColor, boxBottomColor) {
      const boxTop = document.getElementById('box-top');
      const boxTopLeft = document.getElementById('box-top-left');
      const boxTopRight = document.getElementById('box-top-right');
      const boxCenter = document.getElementById('box-center');
      const boxBottomLeft = document.getElementById('box-bottom-left');
      const boxBottomRight = document.getElementById('box-bottom-right');
      const boxBottom = document.getElementById('box-bottom');

      boxTop.style.backgroundColor = boxTopColor;
      boxTopLeft.style.backgroundColor = boxTopLeftColor;
      boxTopRight.style.backgroundColor = boxTopRightColor;
      boxCenter.style.backgroundColor = boxCenterColor;
      boxBottomLeft.style.backgroundColor = boxBottomLeftColor;
      boxBottomRight.style.backgroundColor = boxBottomRightColor;
      boxBottom.style.backgroundColor = boxBottomColor;
    }

    const greenColor = 'rgb(84, 241, 99)';
    const grayColor = 'rgb(109, 108, 108)';
    if (digit === 0) applyNumber(greenColor, greenColor, greenColor, grayColor, greenColor, greenColor, greenColor);
    else if (digit === 1) applyNumber(grayColor, grayColor, greenColor, grayColor, grayColor, greenColor, grayColor);
    else if (digit === 2) applyNumber(greenColor, grayColor, greenColor, greenColor, greenColor, grayColor, greenColor);
    else if (digit === 3) applyNumber(greenColor, grayColor, greenColor, greenColor, grayColor, greenColor, greenColor);
    else if (digit === 4) applyNumber(grayColor, greenColor, greenColor, greenColor, grayColor, greenColor, grayColor);
    else if (digit === 5) applyNumber(greenColor, greenColor, grayColor, greenColor, grayColor, greenColor, greenColor);
    else if (digit === 6) applyNumber(greenColor, greenColor, grayColor, greenColor, greenColor, greenColor, greenColor);
    else if (digit === 7) applyNumber(greenColor, grayColor, greenColor, grayColor, grayColor, greenColor, grayColor);
    else if (digit === 8) applyNumber(greenColor, greenColor, greenColor, greenColor, greenColor, greenColor, greenColor);
    else if (digit === 9) applyNumber(greenColor, greenColor, greenColor, greenColor, grayColor, greenColor, greenColor);
  }, [currentDigit]);
  
  const handleDigitChange = () => {
    setCurrentDigit( currentDigit + 1);
    console.log(digit)
  };

  

  return (
    <div id="container">
      
      <div id='container-number'>
        <div id="box-top" className="horizontal"></div>
        <div className='box'>
          <div id="box-top-left" className="vertical"></div>
          <div id="box-top-right" className="vertical"></div>
        </div>
        <div id="box-center" className="horizontal"></div>
        <div className='box'>
          <div id="box-bottom-left" className="vertical"></div>
          <div id="box-bottom-right" className="vertical"></div>
        </div>
        <div id="box-bottom" className="horizontal"></div>
      </div>
      <div id='container-button'>
        <button onClick={() => handleDigitChange()} className="button-digit">
        Click para aumentar el dígito{currentDigit}
        </button>      
      </div>
    </div>
  );
};

export default SevenSegmentDisplay;