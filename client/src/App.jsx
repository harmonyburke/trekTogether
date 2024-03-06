// import outlet
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

// import css
import './App.css'

// import components
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {

  return (
    <>
    <Header />
    <Provider store={store}>
    <Outlet />
    </Provider>
    <Footer />
    </>
  )
}

export default App
