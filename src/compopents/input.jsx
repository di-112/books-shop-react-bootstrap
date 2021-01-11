import React from 'react'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'

let  SearchForm = ({handleSubmit}) => {
   return (
      <form className="d-flex" onSubmit={handleSubmit}>
      <Field component='input' className="form-control mr-2" name='book' type="search" placeholder="Edit book..." aria-label="Search"/>
       <button className="btn btn-outline-success" type='submit'> Search</button> 
   </form>
   )
}

SearchForm = reduxForm({form: 'searchForm'})(SearchForm)

export  default SearchForm