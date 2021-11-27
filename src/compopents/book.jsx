import React, { useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Card, ListGroup } from 'react-bootstrap'
import cartStore from '../store/cartStore'

const Book = observer(({ book }) => {
  const { addBook, choosenBooks, removeBook } = cartStore

  const {
    image, title, author, price, rating,
  } = book

  const choosenBooksTitles = useMemo(() => choosenBooks.map(book => book.title), [choosenBooks])

  return (
    <Card className="book">
      <Card.Img src={image} className="book__img" alt={title} />
      <Card.Body className="book__body">
        <Card.Title>{title}</Card.Title>
        <ListGroup variant="flush" className="text-left">
          <ListGroup.Item>
            <strong> Автор: </strong>
            <span>{author}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Цена: </strong>
            <span>{`${price} руб.`}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Рейтинг: </strong>
            <span>{`${rating}/5`}</span>
          </ListGroup.Item>
        </ListGroup>
        <div className="d-flex flex-column h-100 justify-content-end">
          {
            choosenBooksTitles.includes(title)
              ? <Button onClick={() => removeBook(book)} variant="danger">Удалить</Button>
              : <Button onClick={() => addBook(book)} variant="primary">Добавить</Button>
          }
        </div>
      </Card.Body>
    </Card>
  )
})

export default Book
