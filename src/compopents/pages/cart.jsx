import React from 'react'
import {NavLink} from 'react-router-dom'
import CardItem from '../cartItem'
import cartStore from "../../mobx/cartStore";
import {observer} from "mobx-react-lite";

const Cart = observer(() => {

   const {choosenBooks, removeBook, addBook, allPrice} = cartStore

   return (
      <div className="cart container">
         {choosenBooks.length?
            <>
            <ul>
            {choosenBooks.map(book=><li><CardItem book={book} removeBook={removeBook} addBook={addBook}/></li>)}
            </ul>
           <div className="cart__price">Общая сумма: <span>{allPrice} рублей</span> <a className='btn btn-success' href='https://qiwi.com/' target='_blank' >Купить</a></div>
            </>
            :<div className='cartEmpty'>
               <p style={{textAlign: 'center'}}>Корзина пуста</p>
               <NavLink to='/' exact type="button" className="btn btn-danger">Back</NavLink>
            </div>}
      </div>
   )
})

export default Cart
