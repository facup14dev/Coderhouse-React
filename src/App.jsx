import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import Cart from "./components/Cart"
import Home from "./components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"




const App = () => {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        {/* <ItemListContainer /> */}

         <Routes>


          <Route exact path="/" element={<Home />}/>
          <Route exact path="/Cart" element={<Cart />}/>
          <Route exact path="/ItemListContainer" element={<ItemListContainer />}/>
          

        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
