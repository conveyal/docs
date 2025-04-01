export default function Image ({alt, src}) {
  return (
    <div className='ZoomableImage'>
      <img 
        className='Thumbnail'
        alt={alt} 
        src={src}
        tabIndex={0}
      />
      <div className='ImageOverlayBackdrop' />
      <img alt={alt} className='ImageOverlay' src={src} />
      <div className='AltText'>{alt}</div>
    </div>
  )
}