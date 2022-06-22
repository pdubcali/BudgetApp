import React, {useEffect, useState} from "react"
import {DataGrid, GridColDef} from "@mui/x-data-grid"
import {LineItem} from "../LineItem/LineItem";

const columns: GridColDef[] = [
  {field: "id", headerName: "ID", hide: true},
  {field: "itemName", headerName: "Item Name", flex: 20},
  {field: "itemAmount", headerName: "Item Amount", flex: 20},
  {field: "date", headerName: "Due Date", flex: 20, type: "date", valueGetter: ({ value }) => value && new Date(value)},
]


const ItemTable = () => {
  const [lineItems, setLineItems] = useState<LineItem[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/lineItem", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).then(res => res.json()).then((result) => {
      setLineItems(result)
    })
  }, [])

  return (
    <div style={{height: 400, width: 700}}>
      <DataGrid
        rows={lineItems}
        columns={columns}
        sx={{borderColor: "grey.300", color: "grey.500"}}
        />
    </div>
  )
}
export default ItemTable