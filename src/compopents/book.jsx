import React from 'react'
import { connect } from 'react-redux'
import { addBook, removeBook } from '../redux/reducers/cartReducer'

const Book = ({book, addBook, choosenBooks, removeBook}) => {
   return (
     <div class="card book" >
        <img src={book.image} class="card-img-top book__img" alt="..."/>
        <div class="card-body book__body">
           <h5 class="card-title">{book.title}</h5>
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
}

const mapStateToProps = (state) => ({
  choosenBooks: state.cart.choosenBooks
})


export default connect(mapStateToProps,{addBook,removeBook})(Book)