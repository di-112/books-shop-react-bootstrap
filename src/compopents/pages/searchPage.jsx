/*
import React from 'react'
import { changeAlert } from '../../redux/reducers/booksReducer';
import Alert  from '../alert';
import Book from '../book';
import { connect } from 'react-redux';

const SearchPage = (props) => {
   return (
      <>
         {props.alert.show?<Alert alert={props.alert}  changeAlert={props.changeAlert}/>:
           <Book book={props.searchedBook}/>
         }
      </>
   )
}

const mapStateToProps = (state) =>({
   searchedBook: state.books.searchedBook,
   alert: state.books.alert
 })

 export default connect(mapStateToProps, {changeAlert})(SearchPage);*/
