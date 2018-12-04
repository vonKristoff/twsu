import React from 'react'
// show matched words from input && dataset with appropriate class tag
const Component = ({collection}) => (
    <div className="word-list-component">
        {collection.map((word, index) => <div className={`badge is-${word.type}`} key={index} >{word.value}</div>)}
    </div>
)

export default Component