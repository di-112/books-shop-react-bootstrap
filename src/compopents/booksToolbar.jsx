import React from 'react'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import booksStore from '../store/booksStore'

const BooksToolbar = observer(() => {
  const { setBooks, sortPriceDown, sortPriceUp } = booksStore
  return (
    <div className="ml-5 d-flex">
      <Button variant="secondary" onClick={sortPriceDown}>Цена ↓</Button>
      <Button variant="secondary" className="mx-3 rounded" onClick={sortPriceUp}>Цена ↑</Button>
      <Button variant="secondary" onClick={setBooks}>Сбросить</Button>
    </div>
  )
})

export default BooksToolbar
