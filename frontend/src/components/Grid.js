import React from "react"
import styled from "styled-components"

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 800px;
  margin: 20px auto;
  word-wrap: break-word;
`

const Thead = styled.th``

const Tr = styled.tr``

const Td = styled.td`
  text-align: center;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyweb && "display: none"}
  }
`

const Grid = () => {
  return(
    <Table>
      <Thead>
        <Tr>
          <Td>Nome</Td>
          <Td>E-mail</Td>
          <Td onlyweb>Telefone</Td>
          <Td></Td>
          <Td></Td>
        </Tr>
      </Thead>
    </Table>
  )
}

export default Grid