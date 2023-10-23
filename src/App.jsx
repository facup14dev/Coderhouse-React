import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import Cart from "./components/Cart"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"




const App = () => {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        {/* <ItemListContainer /> */}

         <Routes>


          <Route exact path="/" element={<ItemListContainer />}/>
          <Route exact path="/Cart" element={<Cart />}/>
          <Route exact path="/ItemListContainer" element={<ItemListContainer />}/>
          <Route exact path="/product/:id" element={<ItemDetailContainer />}/>

          

        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
