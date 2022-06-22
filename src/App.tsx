import React from "react"
import "./App.css"
import LineItemInput from "./components/LineItem/LineItemInput"
import ItemTable from "./components/ItemTable/ItemTable";


function App () {
  return (

      <div className="App">
        <header className="App-header">
          Budget App
          <LineItemInput />
          <ItemTable/>
        </header>
      </div>

  )
}

export default App
