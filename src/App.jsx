import Home from "./pages/Home"
// import React from "react"
// import { useState } from "react"
import './App.css'
// import { CurrencyContext } from "./context/CurrencyContext"

function App() {
  // const [currency, setCurrency] = useState('usd')
  return(
  <>

  {/* <CurrencyContext.provider value = { {currency, setCurrency} }> */}
  <Home />
  {/* </CurrencyContext.provider> */}
    <footer>
      <p>Copyright &copy; 2025 Wincorp</p>
    </footer>
  </>
)
}

export default App;
