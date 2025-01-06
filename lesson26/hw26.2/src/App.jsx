import Header from "./components/Header/Header"
import ButtonIncrement from "./components/ButtonIncrement/ButtonIncrement"
import ButtonDecrement from "./components/Buttondecrement/ButtonDecrement"
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  
return (
  <>
  <Provider store={store}>
  <Header/>
  <ButtonIncrement/>
  <ButtonDecrement/>
  </Provider>
  </>
  
)
}

export default App
