import BookDetail from "./pages/BookDetail"
import AuthorDetail from "./pages/AuthorDetail"
import UserDetail from "./pages/UserDetail"
import Header from "./components/Header"
import Home from "./pages/Home"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    </>
  )
}

export default App
