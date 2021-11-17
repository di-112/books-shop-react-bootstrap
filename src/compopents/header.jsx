import React, {useMemo} from 'react'
import {NavLink} from 'react-router-dom'
import SearchForm from './input'
import {observer} from "mobx-react-lite";
import booksStore from "../mobx/booksStore";
import cartStore from "../mobx/cartStore";

const logoImg = 'https://f0.pngfuel.com/png/1024/338/computer-icons-e-book-e-readers-book-png-clip-art-thumbnail.png'

const Header = observer(() => {

   const { setBooks, searchBook, choosenBooks} = {...booksStore, ...cartStore}

   const choosenBooksCount = useMemo( () => choosenBooks.reduce((acc, book)=> acc + book.count, 0), [choosenBooks])

   return (
      <header className="header navbar navbar-expand-lg navbar-light bg-light">
         <div className="header__container">
            <NavLink to='/home' exact onClick={setBooks} className="navbar-brand" aria-current="page" href="#">
               <img src={logoImg} alt=""/>
            </NavLink>
            <div className="header__menu collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="header__links navbar-nav mr-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                     <NavLink to='/home' exact className="nav-link" aria-current="page" onClick={setBooks} href="#">Home</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink to='/cart' className="nav-link" aria-current="page" href="#">Cart</NavLink>
                  </li>
               </ul>
               <NavLink to='/cart' className="cartIcon d-flex" aria-current="page" href="#">
                  <img  title='Корзина' src='https://baden-shop.ru/images/basket.png' alt=""/>
                  {!!choosenBooks.length && <span >{choosenBooksCount}</span>}
               </NavLink>
              <SearchForm searchBook={searchBook}/>
            </div>
         </div>
      </header>
   )
})

export default Header
