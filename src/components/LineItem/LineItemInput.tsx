import "./lineItem.css"
import SaveIcon from "@mui/icons-material/Save"
import {IconButton, InputAdornment, TextField} from "@mui/material"
import React from "react"
import {DatePicker} from "@mui/x-date-pickers/DatePicker"
import {
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/material/styles";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers"

const customTheme = createTheme({
  spacing: 2,
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: sx({
          color: "grey.500"
        })
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: sx({
          m:2,
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              borderColor: "grey.500",
            },
            "& .MuiTypography-root": {
              color: "grey.500",
            }
          },
          "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
              borderColor: "grey.300",
            },
          },
          "& .MuiFormLabel-root": {
            color: "grey.500",
          },
          "& .MuiSvgIcon-root": {
            color: "grey.500",
          },
        }),
      },
    },
  },
})

const LineItemInput = () => {
  const [itemName, setItemName] = React.useState<string>("")
  const [itemAmount, setItemAmount] = React.useState<string>("")
  const [dueDate, setDueDate] = React.useState<Date | null>(null);

  const handleAmountChange = () => (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemAmount(e.currentTarget.value)
  }
  const handleItemChange = () => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setItemName(e.currentTarget.value)
  }
  const handleSubmit = () => {
    const lineItem = { itemName: itemName, itemAmount: parseFloat(itemAmount), date: dueDate }

    fetch("http://localhost:8080/lineItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lineItem)
    }).then(res => {
      console.log("response: ", res)
    }).catch(err => {
      console.log("error: ", err)
    })
    setDueDate(null)
    setItemAmount("")
    setItemName("")

  }

  return (
    <div className="new-item-input">
      <ThemeProvider theme={customTheme}>
        <TextField
          id="outlined"
          value={itemName}
          onChange={handleItemChange()}
          label="Item"
          variant="outlined"/>

        <TextField
          label="Amount"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          value={itemAmount}
          onChange={handleAmountChange()}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Due Date"
            value={dueDate}
            onChange={(newValue) => {
              setDueDate(newValue)
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <IconButton onClick={handleSubmit}>
          <SaveIcon className="save-icon"/>
        </IconButton>
      </ThemeProvider>

    </div>)
}

export default LineItemInput
