import {CartProvider} from "./contexts/CartContext"
import { RoutesApp } from "./RoutesApp"



function App() {
  return (
    <CartProvider>
      <RoutesApp />
    </CartProvider>

  )
}

export default App
