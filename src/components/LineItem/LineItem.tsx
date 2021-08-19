import clsx from "clsx"
import "./lineItem.css"
import SaveIcon from "@material-ui/icons/Save"
import { createStyles, FormControl, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField, Theme } from "@material-ui/core"
import React from "react"

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
  const [item, setItem] = React.useState<string>("")
  const [amount, setAmount] = React.useState<string>("")
  // const [date, setDate] = React.useState<Date | null>()

  const handleAmountChange = (amount: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.currentTarget.value)
  }
  const handleItemChange = (item: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setItem(e.currentTarget.value)
  }

  return (
    <div className={classes.root}>
      <TextField className={classes.textField} id="item" value={item} onChange={handleItemChange(item)} label="Item" variant="outlined"/>
      <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={amount}
          onChange={handleAmountChange(amount)}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={60}
        />
      </FormControl>
      <IconButton>
        <SaveIcon />
      </IconButton>

    </div>)
}

export default LineItem
