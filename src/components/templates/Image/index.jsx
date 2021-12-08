import PropTypes from 'prop-types'
import { useState, useRef, useEffect } from 'react'
import styled from '@emotion/styled'

let observer = null
const LOAD_IMG_EVENT_TYPE = 'loadImage'

const onIntersection = (entries, io) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target)
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE))
    }
  })
}

const Image = ({
  lazy,
  threshold = 0.5,
  placeholder,
  src,
  alt,
  mode,
  className,
  ratio,
  children,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)

  const imageStyle = {
    objectFit: mode, // cover, fill, contain
  }

  useEffect(() => {
    if (!lazy) {
      setLoaded(true)
      return
    }

    const handleLoadImage = () => setLoaded(true)
    const imgElement = imgRef.current
    imgElement?.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage)

    return () => {
      imgElement?.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage)
    }
  }, [lazy])

  useEffect(() => {
    if (!lazy) {
      return
    }

    observer = new IntersectionObserver(onIntersection, { threshold })
    imgRef.current && observer.observe(imgRef.current)
  }, [lazy, threshold])

  const handleImgError = e => {
    switch (ratio) {
      case 'rectangle-h':
        e.target.src = require('@assets/images/no-image_ rectangle-h.png')
        break
      case 'rectangle-w':
        e.target.src = require('@assets/images/no-image_ rectangle-w.png')
        break
      default:
        e.target.src = require('@assets/images/no-image_square.png')
    }
  }

  return (
    <IMG
      className={className}
      onError={handleImgError}
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt={alt}
      style={{ ...imageStyle, ...props.style }}>
      {children}
    </IMG>
  )
}

Image.propTypes = {
  lazy: PropTypes.bool,
  threshold: PropTypes.number,
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alt: PropTypes.string,
  mode: PropTypes.string,
  ratio: PropTypes.string,
}

const IMG = styled.img`
  border: 1px solid #ccc;
`

export default Image
