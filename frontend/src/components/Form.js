import axios from "axios"
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { toast } from "react-toastify"

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: var(--bg-form-table);
  padding: 20px;
  box-shadow: 0px 0px 5px var(--color-box-shadow);
  border-radius: 5px;
`

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  outline: none;
  background-color: var(--bg-input);
  color: var(--color-text-input);
`

const Label = styled.label`
  color: var(--color-text);
`

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: var(--bg-button);
  color: #fff;
  height: 42px;
  text-transform: uppercase;
`

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef()

  useEffect(() => {
    if (onEdit) {
      const user = ref.current

      user.nome.value = onEdit.nome
      user.email.value = onEdit.email
      user.telefone.value = onEdit.telefone
      user.data_nascimento.value = onEdit.data_nascimento
    }
  }, [onEdit])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = ref.current

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.telefone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!")
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          telefone: user.telefone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data))
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          telefone: user.telefone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data))
    }

    user.nome.value = ""
    user.email.value = ""
    user.telefone.value = ""
    user.data_nascimento.value = ""

    setOnEdit(null)
    getUsers()
  }

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome"></Input>
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email"></Input>
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="telefone"></Input>
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" type="date"></Input>
      </InputArea>

      <Button type="submit">Salvar</Button>
    </FormContainer>
  )
}

export default Form