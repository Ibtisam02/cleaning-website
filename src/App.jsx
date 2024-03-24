import { Route, Routes } from "react-router-dom"
import MyContextProvider from "./context/MyContextProvider"
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Contact from "./pages/Contact"
import "./App.css"

function App() {

  return (
    <MyContextProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </MyContextProvider>
  )
}

export default App
