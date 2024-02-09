import Footer from "./components/footer"
import BookDetail from "./pages/BookDetail"
import AuthorDetail from "./pages/AuthorDetail"
import UserDetail from "./pages/UserDetail"
import Header from "./components/Header"
import Home from "./pages/Home"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from "./pages/Error"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Routes>
          <Route path="/" element={<Home />} errorElement={}>
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes> */}
        <Error />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
