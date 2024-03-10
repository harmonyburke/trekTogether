// import outlet
import { Outlet } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './utils/store'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// import css
import './App.css'

// import components
import Header from './components/Header'
import Footer from './components/Footer'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = () => {

  return (
    <>
    <Header />
    <ApolloProvider client={client}>
    <Outlet />
    </ApolloProvider>
    <Footer />
    </>
  )
}

export default App
