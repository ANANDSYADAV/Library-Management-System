// import BookDetail from "./pages/BookDetail"
// import AuthorDetail from "./pages/AuthorDetail"
// import UserDetail from "./pages/UserDetail"
import Header from "./components/Header"
import Home from "./pages/Home"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      {/* <Outlet /> */}
      <Home />
    </>
  )
}

export default App
