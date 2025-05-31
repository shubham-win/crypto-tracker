import Home from "./pages/Home"
// import React from "react"
// import { useState } from "react"
import './app.css'
// import { CurrencyContext } from "./context/CurrencyContext"

function App() {
  // const [currency, setCurrency] = useState('usd')
  return(
  <>

  {/* <CurrencyContext.provider value = { {currency, setCurrency} }> */}
  <Home />
  {/* </CurrencyContext.provider> */}
    
  </>
)
}

export default App;
