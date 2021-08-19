import React from "react"
import "./App.css"
import LineItem from "./components/LineItem/LineItem"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createTheme({
  palette: {
    type: "dark"
  }
})

function App () {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          Budget App
          <LineItem />
        </header>
      </div>
    </ThemeProvider>

  )
}

export default App
