import React from 'react'
import { connect } from 'react-redux'
import { setBooks, sortPriceDown, sortPriceUp } from '../redux/reducers/booksReducer'
import Book from './book'

const Books = ({books, setBooks, sortPriceDown, sortPriceUp}) => {
   if(books.length===1)
   return (
      <div className="search container">
         {books.map(book => <Book key={book.title} book={book}/>)}
         <button className='btn btn-danger' onClick={setBooks}>Назад</button>
      </div>
   )
   else
   return (
      <>
      <div className="sortBooksBtns container">
         <button className='btn btn-secondary' onClick={sortPriceDown}>Цена ↓</button>
         <button className='btn btn-secondary' onClick={sortPriceUp}>Цена ↑</button>
         <button className='btn btn-secondary' onClick={setBooks}>Сбросить</button>
      </div>
      <div className='books container'>
         {books && books.map(book => <Book key={book.title} book={book}/>)}
      </div>
      </>
   )
}

export default connect(()=>{}, {setBooks,sortPriceDown, sortPriceUp})(Books)