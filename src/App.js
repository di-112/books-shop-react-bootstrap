import './scss/App.scss'
import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import Header from './compopents/header'
import Loader from './compopents/loader'
import Cart from './compopents/pages/cart'
import HomePage from './compopents/pages/home'
import booksStore from './store/booksStore'
import cartStore from './store/cartStore'

const App = observer(() => {
  const { isLoading, setBooks } = { ...booksStore, ...cartStore }

  useEffect(async () => {
    await setBooks()
  }, [])

  return (
    <div className="App container-xxl">
      <Redirect to="/home" />
      <Header />
      {
        isLoading ? <Loader />
          : (
            <>
              <Route path="/home" exact render={() => <HomePage />} />
              <Route path="/cart" exact render={() => <Cart />} />
            </>
          )
      }
    </div>
  )
})

export default App
