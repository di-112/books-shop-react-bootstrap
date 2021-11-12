import './scss/App.scss';
import Header from './compopents/header';
import Loader from './compopents/loader';
import React, {useEffect} from 'react';
import {Redirect, Route} from 'react-router-dom';
import Cart from './compopents/pages/cart';
import HomePage from './compopents/pages/home';
import booksStore from "./mobx/booksStore.js";
import cartStore from "./mobx/cartStore";
import {observer} from "mobx-react-lite";

const App = observer( () => {

  const { isLoading, setBooks} = {...booksStore, ...cartStore}


  useEffect(async ()=>{
    await setBooks()
  },[])

  return (
    <div className="App container-xxl">
      <Redirect to='/home' />
      <Header />
      {
        isLoading ? <Loader /> :
        <>
          <Route path='/home' exact render={() => <HomePage/>}/>
          <Route path='/cart' exact render={() => <Cart />}/>
        </>
      }
    </div>
  );
})

export default App
