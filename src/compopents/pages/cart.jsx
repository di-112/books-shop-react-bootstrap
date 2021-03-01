import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addBook, removeBook } from '../../redux/reducers/cartReducer'
import CardItem from '../cartItem'

const Cart = (props) => {

   return (
      <div className="cart container">
         {props.choosenBooks.length?
            <>
            <ul>
            {props.choosenBooks.map(book=><li><CardItem book={book} removeBook={props.removeBook} addBook={props.addBook}/></li>)}
            </ul>
           <div className="cart__price">Общая сумма: <span>{props.allPrice} рублей</span> <a className='btn btn-success' href='https://qiwi.com/' target='_blank' >Купить</a></div>
            </>
            :<div className='cartEmpty'>
               <p style={{textAlign: 'center'}}>Корзина пуста</p>
               <NavLink to='/' exact type="button" className="btn btn-danger">Back</NavLink>
            </div>}
      </div>
   )
}

const mapStateToProps = (state) =>({
   choosenBooks: state.cart.choosenBooks,
   allPrice: state.cart.allPrice
 })

export default connect(mapStateToProps, {addBook,removeBook})(Cart)