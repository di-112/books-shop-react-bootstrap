import React from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import CardItem from '../cartItem'
import cartStore from '../../store/cartStore'

const Cart = observer(() => {
  const { choosenBooks, allPrice } = cartStore

  return (
    <div className="cart container-xl">
      {choosenBooks.length
        ? (
          <>
            <ul>{ choosenBooks.map(book => <li><CardItem book={book} /></li>) }</ul>
            <div className="cart__price">
              Общая сумма:
              <span>{`${allPrice} рублей`}</span>
              <a className="btn btn-success" href="https://qiwi.com/" target="_blank" rel="noreferrer">Купить</a>
            </div>
          </>
        )
        : (
          <div className="cartEmpty">
            <p className="text-center">Корзина пуста</p>
            <NavLink to="/" exact type="button" className="btn btn-danger">Назад</NavLink>
          </div>
        )}
    </div>
  )
})

export default Cart
