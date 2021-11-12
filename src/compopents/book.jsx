import React from 'react'
import cartStore from "../mobx/cartStore";
import {observer} from "mobx-react-lite";

const Book = observer(({book}) => {
  const {addBook, choosenBooks, removeBook} = cartStore
   return (
     <div className="card book" >
        <img src={book.image} className="card-img-top book__img" alt="..."/>
        <div className="card-body book__body">
           <h5 className="card-title">{book.title}</h5>
           <ul className="list-group list-group-flush">
              <li className="list-group-item"><span> Автор:</span> {book.author}</li>
              <li className="list-group-item"><span>Цена:</span> {book.price} руб.</li>
              <li className="list-group-item"><span>Рейтинг:</span> {book.rating}/5</li>
          </ul>
          <div className="btn_container">
               {choosenBooks.map(book => book.title).includes(book.title) ?
                  <button onClick={(e) => { e.preventDefault(); removeBook(book) }} className="btn btn-danger"> Удалить</button>:
                  <button onClick={(e) => { e.preventDefault(); addBook(book) }} className="btn btn-primary"> Добавить</button>
               }
          </div>
         </div>
      </div>
            )
})

export default Book
