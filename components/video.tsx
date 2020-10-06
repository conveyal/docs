import useBaseUrl from '@docusaurus/useBaseUrl' 
import React from 'react'

const imgStyle = {
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
  margin: '15px 0 0',
  maxWidth: '100%'
}

export default function Video ({alt, src}) {
  return (
    <p>
      <div style={{textAlign: 'center'}}>
        <video 
          controls
          src={useBaseUrl(src)} 
          style={imgStyle}
        />
        <div 
          style={{
            fontStyle: 'italic',
            fontSize: '75%'
          }}
        >{alt}</div>
      </div>
    </p>
  )
}