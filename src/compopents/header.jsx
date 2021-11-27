import React, { useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Nav } from 'react-bootstrap'
import booksStore from '../store/booksStore'
import cartStore from '../store/cartStore'
import SearchForm from './input'
import logoImg from '../assets/logo.png'

const Header = observer(() => {
  const { setBooks, searchBook, choosenBooks } = { ...booksStore, ...cartStore }

  const choosenBooksCount = useMemo(() => choosenBooks.reduce((acc, book) => acc + book.count, 0), [choosenBooks])

  return (
    <header className="header navbar navbar-expand-lg py-2 px-3 bg-light">
      <div className="header__menu collapse navbar-collapse">
        <Nav className="header__links mr-auto mb-2">
          <Nav.Item>
            <Nav.Link as="img" src={logoImg} className="logo" alt="" to="/home" exact onClick={setBooks} />
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/home" exact onClick={setBooks}> Home </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/cart" exact onClick={setBooks}> Cart </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="d-flex">
          <NavLink to="/cart" className="cartIcon">
            <img title="Корзина" src="https://baden-shop.ru/images/basket.png" alt="" />
            {!!choosenBooks.length && <span>{choosenBooksCount}</span>}
          </NavLink>
          <SearchForm searchBook={searchBook} />
        </div>
      </div>
    </header>
  )
})

export default Header
