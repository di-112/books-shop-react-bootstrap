import './scss/App.scss';
import Header from './compopents/header';
import Books from './compopents/books';
import { connect } from 'react-redux';
import Loader from './compopents/loader';
import { changeAlert, searchBook, setBooks } from './redux/reducers/booksReducer';
import { useEffect } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Cart from './compopents/pages/cart';
import HomePage from './compopents/pages/home';


function App(props) {

  useEffect(()=>{
   props.setBooks()
  },[])

  return (
    <div className="App container-xxl">
      <Redirect to='/home' />
      <Header setBooks={ props.setBooks} searchBook={props.searchBook} choosenBooks={props.choosenBooks}/>
      {
        props.isLoading ? <Loader /> :
        <>
          <Route path='/home' exact render={() => <HomePage/>}/>
          <Route path='/cart' exact render={() => <Cart />}/>
          
        </>
      }
    </div>
  );
}

const mapStateToProps = (state) =>({
  books: state.books.books,
  isLoading: state.books.isLoading,
  alert: state.books.alert,
  searchedBook: state.books.searchedBook,
  choosenBooks: state.cart.choosenBooks
})

export default compose(
  withRouter,
  connect(mapStateToProps, {setBooks,searchBook, changeAlert})
)(App)