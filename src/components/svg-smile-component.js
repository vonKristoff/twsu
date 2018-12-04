import React from 'react'
// paint SVG of Mood type
const Component = ({ model, svg }) => {
   
    const getEyeParams = target => model.eyes ? model.eyes[target] : ""
    const eye1 = (<ellipse {...getEyeParams("left")} fill={`transparent`} stroke={`white`} strokeWidth={5} />)
    const eye2 = (<ellipse {...getEyeParams("right")} fill={`transparent`} stroke={`white`} strokeWidth={5} />)
    const path = (
        <path 
            d={`
                M ${[svg.START_X, svg.START_Y]}
                Q ${[svg.CONTROL_X, svg.CONTROL_Y]} ${[svg.END_X, svg.END_Y]}
            `}
            strokeLinecap="round"
            fill="none"
            stroke="white"
            strokeWidth={5}
        />
    );
    return (
        <svg className="svg--smile" viewBox="0 0 200 300">
            {model.eyes && eye1}
            {model.eyes && eye2}
            {path}
        </svg>
    )    
}

export default Component
 