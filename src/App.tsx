import React from 'react';
import logo from './logo.svg';
import './App.css';
import LineItem from './components/LineItem/LineItem';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          Budget App
          <LineItem />
        </header>
      </div>
    </ThemeProvider>

  );
}

export default App;
