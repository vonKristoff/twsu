import React from 'react'
const Component = ({type, name, placeholder, onChange}) => {
    const value = event => onChange(event.target.value)
    return (
        <input type={type} name={name} placeholder={placeholder} onChange={value} />
    );
}
export default Component