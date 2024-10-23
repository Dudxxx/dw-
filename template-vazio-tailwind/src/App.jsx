import { TemaProvider } from "./context/TemaContext"
import { Home } from "./pages/Home"

function App() {
  

  return (
    <TemaProvider>
      <Home/>
    </TemaProvider>
  )
}

export default App
