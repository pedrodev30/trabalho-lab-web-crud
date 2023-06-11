import React, { useState } from "react"
import { FiSun, FiMoon } from "react-icons/fi"
import styled from "styled-components"

const ToggleContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
  z-index: 999;
`

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.body.classList.remove("dark-theme")
    } else {
      document.body.classList.add("dark-theme")
    }
  }

  return (
    <ToggleContainer onClick={handleToggle} isDarkMode={isDarkMode}>
      {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
    </ToggleContainer>
  )
}

export default DarkModeToggle
