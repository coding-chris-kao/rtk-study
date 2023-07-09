import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import logo from "./logo.svg"
import { routes } from "./router/routes"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter basename="/">
          <Routes>
            {routes.map((props) => (
              <Route key={props.path} {...props} />
            ))}
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
