import { ModalMessage } from './state'
import PropTypes from 'prop-types'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

function Modal({ className, visible }) {
    const [Message, setMessage] = useRecoilState(ModalMessage)
    setMessage('ee') // 임시용

    return (
        <>
            <ModalWrapper className={className} tabIndex="-1" visible={visible}>
                <ModalInner tabIndex="0" className="modal-inner">
                    <RiCheckboxCircleFill />
                    <ModalContent>
                        {Message}
                    </ModalContent>
                </ModalInner>
            </ModalWrapper>
        </>
    )
}

Modal.propTypes = {
    visible: PropTypes.bool,
}

const ModalContent = styled.div`
    font-size : 14px;
    font-weight : bold;
    color : #333;
    background-color : #fff;
    padding-left : 20px;
    text-align : justify;
`
const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  background-color : rgba(0, 0, 0, 0);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  outline: 0;

  @keyframes Modal_animation {
      0% {
        display : block;
        opacity : 0;
      }
      10% {
        opacity : 1;
      }
      95% {
          opacity : 1;
      }
      100% {
          opacity : 0;
          display : none;
      }
  }

  animation: Modal_animation 4s ease-out forwards;
`
/*
const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;

  <ModalOverlay visible={visible} />로 사용
`*/

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top : 98%;
  transform: translateY(-100%);
  margin: 0 auto;
  padding: 20px 20px;
  display : flex;
  flex-direcion : column-reverse;
  border-left : 7px solid #506fdf;
`

export default Modal
