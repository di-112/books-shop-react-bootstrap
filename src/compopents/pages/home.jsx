import React from 'react'
import { changeAlert} from '../../redux/reducers/booksReducer';
import Alert  from '../alert';
import Books from '../books';
import { connect } from 'react-redux';

const HomePage = (props) => {
   return ( 
      <>
          {props.alert.show?<Alert alert={props.alert} changeAlert={props.changeAlert}/>:<Books books={props.books}/>}
      </>
   )
} 

const mapStateToProps = (state) =>({
   books: state.books.books,
   alert: state.books.alert
 })
 
 export default connect(mapStateToProps, {changeAlert})(HomePage);