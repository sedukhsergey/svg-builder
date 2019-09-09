import React, { useState, useRef } from 'react';
import InlineSVG from 'svg-inline-react';
import SvgIcon from '../SvgIcon';

const SvgManager = ({ svg }) => {
  const [icon, setIcon] = useState(null)
  const inputEl = useRef(null);
  const svgRef = useRef(null);

  const setFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsText(file);
      reader.onload = () => {
        setIcon(reader.result)
      };
    }
  };

  const handleSVGClick = (e) => {
    const target = e.target;
    const src = e.currentTarget;
    const allPath = src.getElementsByTagName('path')
    // const allPath = e.target.getElementsByTagName('path');
    console.log('allPath',allPath)
  }
  const ico = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-350 -250 700 500">
      <style type="text/css" media="screen">
        svg { background:#fff; }
        .face { stroke:#000; stroke-width:20px; stroke-linecap:round }
      </style>
      <circle r="200" class="face" fill="red"/>
      <path fill="none" class="face" transform="translate(-396,-230)" d="M487,282c-15,36-51,62-92,62 c-41,0-77-25-92-61"/>
      <circle cx="-60" cy="-50" r="20" fill="#000"/>
      <circle cx="60" cy="-50" r="20" fill="#000"/>
    </svg>
  `
    return (
      <>
          <div>
            <input
              ref={inputEl}
              id="image"
              type="file"
              name="image"
              onChange={event => {
                setFile(event);
              }}
              accept="image/jpeg"
            />
            <button>Chose the file</button>

          </div>
          {/*<div className='icon-container'>*/}
            {icon ?
              <>
              {/*<SvgIcon svg={svg} with={100} height={100}/>*/}
              <InlineSVG src={icon} onClick={handleSVGClick} ref={svgRef}/> : ""
                </> : ''
            }
      </>
    )
}

export default SvgManager;