import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`

  :root {
    --bg-body: #f2f2f2;
    --color-text: #000;
    --bg-form-table: #fff;
    --bg-button: #2c73d2;
    --bg-input: #fff;
    --color-text-input: #000;
    --color-box-shadow: #ccc;
  }

  .dark-theme {
    --bg-body: #111;
    --color-text: #fff;
    --bg-form-table: #292C35;
    --bg-input: #292C35;
    --color-text-input: #fff;
    --color-box-shadow: #111;
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
    background-color: var(--bg-body);
  }
`

export default Global