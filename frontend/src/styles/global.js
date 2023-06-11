import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`

  :root {
    --bg-body: #f2f2f2;
    --color-text: #000;
    --bg-form-table: #fff;
    --bg-button: #2c73d2;
    --bg-input: #fff;
  }

  .dark-theme {
    --bg-body: #292C35;
    --color-text: #fff;
    --bg-form-table: #111;
    --bg-input: #111;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f1f1f1;
  }
`

export default Global