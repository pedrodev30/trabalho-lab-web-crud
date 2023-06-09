import React, { useRef } from "react"
import styled from "styled-components"

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`

const Form = ({ onEdit }) => {
  const ref = useRef()

  return (
    <FormContainer ref={ref}>
    </FormContainer>
  )
}

export default Form