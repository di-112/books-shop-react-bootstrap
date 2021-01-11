import React, { useState } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import SearchForm from './input'

const logoImg = 'https://f0.pngfuel.com/png/1024/338/computer-icons-e-book-e-readers-book-png-clip-art-thumbnail.png'

const Header = (props) => {

   const searchBook = (formData) => {
      props.searchBook(formData.book)
   }  

   
   const summa = (array) => {
      let sum=0
      for(let i=0; i<array.length; i++){
         sum=sum+array[i].count
      }
      return sum
}

   return ( 
      <header className="header navbar navbar-expand-lg navbar-light bg-light">
         <div className="header__container">
            <NavLink to='/home' exact onClick={props.setBooks} className="navbar-brand" aria-current="page" href="#">
               <img src={logoImg} alt=""/>
            </NavLink>
            <div className="header__menu collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="header__links navbar-nav mr-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                     <NavLink to='/home' exact className="nav-link" aria-current="page" onClick={props.setBooks} href="#">Home</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink to='/cart' className="nav-link" aria-current="page" href="#">Cart</NavLink>
                  </li>
               </ul>
               <NavLink to='/cart' className="cartIcon d-flex" aria-current="page" href="#">
                  <img  title='Корзина' src='https://baden-shop.ru/images/basket.png' alt=""/>
                  {props.choosenBooks.length?<span >{summa(props.choosenBooks)}</span>:''}
               </NavLink>
              <SearchForm onSubmit={searchBook}/>
            </div>
         </div>
      </header>
   )
}

export default Header