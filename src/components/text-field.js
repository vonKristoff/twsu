import React from 'react'
import InputField from './input-field'
const Component = ({onChange}) => {
    const asWordsList = value => {
        let collection = value.split(" ")
        onChange(collection)
    }
    return (
        <div className="field-container">            
            <InputField type="text" name="textfield" placeholder="Tell me about your day!" onChange={asWordsList}/>
            <label />
        </div>
    );
}
export default Component