import React, { Component } from "react"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  )
}
