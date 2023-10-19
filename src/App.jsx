import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import Cards from "./components/Cards"

const App = () => {
  return (
    <>
    
      <Navbar />
      <ItemListContainer ofertaSemanal="Esta semana la oferta es ..." />
      <Cards />
    
    </>
  )

}

export default App
