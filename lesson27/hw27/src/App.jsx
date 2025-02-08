import Header from "./components/Header/Header"
import { store } from "./redux/store"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}> 
      <Header/>
      </Provider>

  )
}

export default App
