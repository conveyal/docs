import React from 'react'

// Colors from https://chakra-ui.com/theme
const bgColorMap = {
  blue: '#3182CE',
  cyan: '#00B5D8',
  gray: '#EDF2F7',
  green: '#38A169',
  red: '#E53E3E',
  yellow: '#D69E2E'
}

const fgColorMap = {
  blue: '#fff',
  cyan: '#fff',
  gray: '#333',
  green: '#fff',
  red: '#fff',
  yellow: '#fff'
}

export default function Btn ({
  children, 
  variantColor,
  variant
}) {
  return (
    <span
      style={{
        backgroundColor: variant == 'outline' ? 'none' : bgColorMap[variantColor],
        border: variant == 'outline' ? bgColorMap[variantColor] : 'none',
        borderRadius: '4px',
        borderStyle: 'solid',
        borderWidth: 'thin',
        color: variant == 'outline' ? bgColorMap[variantColor] : fgColorMap[variantColor],
        display: 'inline-block',
        fontWeight: 500,
        fontSize: '75%',
        padding: '0.25rem 0.5rem',
        cursor: 'pointer'
      }}
    >{children}</span>
  )
}