import clsx from "clsx"
import "./lineItem.css"
import SaveIcon from "@material-ui/icons/Save"
import { createStyles, FormControl, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField, Theme } from "@material-ui/core"
import React from "react"
import axios from "axios"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    margin: {
      margin: theme.spacing(1)
    },
    textField: {
      width: "25ch"
    }
  })
)

const LineItem = () => {
  const classes = useStyles()
  const [itemName, setItemName] = React.useState<string>("")
  const [itemAmount, setItemAmount] = React.useState<string>("")
  // const [date, setDate] = React.useState<Date | null>()

  const handleAmountChange = (amount: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemAmount(e.currentTarget.value)
  }
  const handleItemChange = (item: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setItemName(e.currentTarget.value)
  }
  const handleSubmit = (e: { preventDefault: () => void }) => {
    const lineItem = { itemName: itemName, itemAmount: parseFloat(itemAmount) }

    axios.post("http://localhost:8080/lineItem", JSON.stringify(lineItem), {
      headers: {
        "Content-Type": "application/json"
      }
    }
    ).then(res => {
      console.log("response: ", res)
    }).catch(err => {
      console.log("error: ", err)
    })
  }

  // const saveItem = (item: string, amount: string) => (axios.post("http://localhost:8080/lineItem"))

  return (
    <div className={classes.root}>
      <TextField className={classes.textField} id="item" value={itemName} onChange={handleItemChange(itemName)} label="Item" variant="outlined"/>
      <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={itemAmount}
          onChange={handleAmountChange(itemAmount)}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={60}
        />
      </FormControl>
      <IconButton onClick={handleSubmit}>
        <SaveIcon />
      </IconButton>

    </div>)
}

export default LineItem
