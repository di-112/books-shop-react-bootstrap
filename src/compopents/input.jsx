import React, {useState} from 'react'

const  SearchForm = ({searchBook}) => {
  const [value, setValue] = useState(null)
   return (
      <div className="d-flex">
        <input value={value} onChange={e=>setValue(e.currentTarget.value)} className="form-control mr-2" type="search" placeholder="Edit book..." aria-label="Search"/>
        <button onClick={()=>searchBook(value)} className="btn btn-outline-success" type='submit'> Search</button>
      </div>
   )
}
export  default SearchForm
