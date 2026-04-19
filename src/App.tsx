import {CartProvider} from "./contexts/CartContext"
import { RoutesApp } from "./RoutesApp"

import { Toaster } from "react-hot-toast"



function App() {
  return (
    <CartProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <RoutesApp />
    </CartProvider>

  )
}

export default App
