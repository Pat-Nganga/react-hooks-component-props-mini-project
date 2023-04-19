import React from 'react'

const About = (props) => {
  return (
    <div>
      {props.image ? (
        <img src={props.image} alt='blog logo' />
      ) : (
        <img src='https://via.placeholder.com/215' alt='blog logo' />
      )}
      <p>{props.about}</p>
    </div>
  )
}

export default About
