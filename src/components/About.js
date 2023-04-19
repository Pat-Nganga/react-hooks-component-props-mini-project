import React from 'react'


const About = (props) => {
  const { imageSrc, aboutText } = props
  const defaultImage = 'https://via.placeholder.com/215'
  const imageAlt = 'blog logo'
  return (
    <aside>
      {/* <img src={imageSrc || 'logo.svg'} alt={imageAlt} /> */}

      {/* <img src={imageSrc || defaultImage} alt={imageAlt} /> */}
      <p>{aboutText}</p>
    </aside>
  )
}

export default About
