import GlobalStyle from "../src/styles/global.js"
import style from "styled-components"
import Form from "./components/Form.js"
import Grid from "./components/Grid.js"
import { useState } from "react"
import { useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"

const Container = style.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const Title = style.h2`
  text-transform: uppercase;
`

function App() {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async() => {
    try {
      const res = await axios.get("https://localhost:8800")
      setUsers(res.data.soft((a, b) => (a.nome > b.nome ? 1 : -1)))
    } catch(error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [setUsers])

  return (
    <>
      <Container>
        <Title>Cadastro de usuários</Title>
        <Form />
        <Grid users={users} />
      </Container>
      <ToastContainer autoClose={300} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
