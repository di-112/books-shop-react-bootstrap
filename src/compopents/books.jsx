import React from 'react'
import { observer } from 'mobx-react-lite'
import { Container } from 'react-bootstrap'
import Book from './book'
import booksStore from '../store/booksStore'

const Books = observer(() => {
  const {
    books, setBooks, sortPriceDown, sortPriceUp,
  } = booksStore

  if (books.length === 1) {
    return (
      <div className="search container">
        {books.map(book => <Book key={book.title} book={book} />)}
        <button className="btn btn-danger" onClick={setBooks}>Назад</button>
      </div>
    )
  }
  return (
    <>
      <div className="sortBooksBtns container">
        <button className="btn btn-secondary" onClick={sortPriceDown}>Цена ↓</button>
        <button className="btn btn-secondary" onClick={sortPriceUp}>Цена ↑</button>
        <button className="btn btn-secondary" onClick={setBooks}>Сбросить</button>
      </div>
      <Container fluid="xxl" className="books">
        {books && books.map(book => <Book key={book.title} book={book} />)}
      </Container>
    </>
  )
})

export default Books
