import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function TypeAnimations() {
  return (
    <TypeAnimation
    sequence={[
      'BESPOKE GIFTING',
      2000,
      'TAILORED TREATS',
      2000,
      'GOURMET HAMPERS',
      2000,
      'CURATED GIFTS',
      2000
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: '1em', display: 'inline-block' }}
    repeat={Infinity}
  />
  )
}

export default TypeAnimations