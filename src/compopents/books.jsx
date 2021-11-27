import React from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Container } from 'react-bootstrap'
import BooksToolbar from './booksToolbar'
import Book from './book'
import booksStore from '../store/booksStore'

const Books = observer(() => {
  const { books, setBooks } = booksStore

  if (books.length === 1) {
    return (
      <Container fluid="xl" className="d-flex flex-column align-items-center">
        {books.map(book => <Book key={book.title} book={book} />)}
        <Button variant="danger" className="mt-4" onClick={setBooks}>Назад</Button>
      </Container>
    )
  }
  return (
    <Container fluid="xl">
      <BooksToolbar />
      <div className="books">
        {books && books.map(book => <Book key={book.title} book={book} />)}
      </div>
    </Container>
  )
})

export default Books
