import React from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Card, ListGroup } from 'react-bootstrap'
import cartStore from '../store/cartStore'

const Book = observer(({ book }) => {
  const { addBook, choosenBooks, removeBook } = cartStore

  return (
    <Card className="book">
      <Card.Img src={book.image} className="book__img" alt={book.title} />
      <Card.Body className="book__body">
        <Card.Title>{book.title}</Card.Title>
        <ListGroup variant="flush" className="text-left">
          <ListGroup.Item>
            <strong> Автор: </strong>
            <span>{book.author}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Цена: </strong>
            <span>{`${book.price} руб.`}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Рейтинг: </strong>
            <span>{`${book.rating}/5`}</span>
          </ListGroup.Item>
        </ListGroup>
        <div className="d-flex flex-column h-100 justify-content-end">
          {
            choosenBooks.map(book => book.title).includes(book.title)
              ? <Button onClick={() => removeBook(book)} variant="danger">Удалить</Button>
              : <Button onClick={() => addBook(book)} variant="primary">Добавить</Button>
          }
        </div>
      </Card.Body>
    </Card>
  )
})

export default Book
