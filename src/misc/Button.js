import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: 1rem;
  color: white;
  padding: 10px 30px;
  border: none;
  border-radius: 18px;
  background: #31b5ff;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    filter: brightness(1.2);
  }
  &:active {
    filter: brightness(1);
  }
`

const Button = (props) => {
  return (
    <StyledButton style={props.style} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  )
}

export default Button
