import React from 'react'
import { connect } from 'react-redux';
import { addBook, decrementCountBook, incrementCountBook } from '../redux/reducers/cartReducer';
import cartStore from "../mobx/cartStore";
import {observer} from "mobx-react-lite";

const CardItem = observer(({book}) => {
   const { removeBook, incrementCountBook, decrementCountBook} = cartStore
   return (
   <div key={book.title}>
      <div className="cart__book">
         <img src={book.image} alt="" className="book__img"/>
         <span className="book__title">{book.title}</span>
         <div className='book_count'>
            <button className='btn btn-danger'  disabled={book.count===1} onClick={(e)=>{e.preventDefault() ; decrementCountBook(book)}}>-</button>
            <span className=''> {book.count} шт. </span>
            <button className='btn btn-success' onClick={(e)=>{e.preventDefault() ; incrementCountBook(book)}}>+</button>
         </div>
         <span className='book__price'>{book.price} руб.</span>
         <button className='btn btn-danger' onClick={(e)=>{e.preventDefault() ; removeBook(book)}}>Удалить</button>
      </div>
   </div>
   )
})

export default CardItem
