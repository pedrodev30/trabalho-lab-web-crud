import GlobalStyle from "../src/styles/global.js"
import style from "styled-components"
import Form from "./components/Form.js"
import Grid from "./components/Grid.js"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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
  return (
    <>
      <Container>
        <Title>Cadastro de usuários</Title>
        <Form />
        <Grid />
      </Container>
      <ToastContainer autoClose={300} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
