import React from 'react'
import Book from './book'
import booksStore from "../mobx/booksStore";
import {observer} from "mobx-react-lite";

const Books = observer( () => {

   const {books, setBooks, sortPriceDown, sortPriceUp} = booksStore

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
})

export default Books
