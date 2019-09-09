import React from 'react';
import ReactSVG from "react-svg";
import './SvgIcon.css'

const SvgIcon = ({ svg, width, height }) => {
  return (
    <div>
      <ReactSVG
        src={svg}
        afterInjection={(error, svg) => {
          if (error) {
            console.error(error)
            return
          }
        }}
        beforeInjection={svg => {
          console.log('svg',svg)
          // console.log('afterInjection svg',svg)
          const allPath = svg.getElementsByTagName('path');
          for(let i = 0; i < allPath.length; i++) {
            allPath[i].setAttribute('style', `fill:${`#${Math.floor(Math.random()*16777215).toString(16)}`}`)
            allPath[i].addEventListener('click', (e) => {
              const partOfIcon = e.target;
              partOfIcon.setAttribute('style', `fill:${`#${Math.floor(Math.random()*16777215).toString(16)}`}`)
            })
          }
          svg.classList.add('svg-class-name')
        }}
        evalScripts="always"
        fallback={() => <span>Error!</span>}
        loading={() => <span>Loading</span>}
        renumerateIRIElements={false}
        wrapper="span"
        className="wrapper-class-name"
        onClick={(e) => {
          console.log('wrapper onClick')
        }}
      />
    </div>
  )
}

export default SvgIcon;