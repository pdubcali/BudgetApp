import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders main screen", () => {
  render(<App/>)
  const linkElement = screen.getByText("Budget App")
  expect(linkElement).toBeInTheDocument()
})
