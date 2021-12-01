import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Modal = ({ style, children, className }) => {
  return (
    <BackgroundDIM>
      <ModalContainer style={style} className={className}>
        {children}
      </ModalContainer>
    </BackgroundDIM>
  )
}

Modal.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
}

const BackgroundDIM = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`

const ModalContainer = styled.div`
  position: fixed;
  background-color: white;
  width: 404px;
  height: 500px;
  border-radius: 10px;
  padding: 60px 40px 50px 40px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`

export default Modal
