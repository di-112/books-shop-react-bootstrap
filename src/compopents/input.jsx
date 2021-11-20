import React, { useState } from 'react'
import { FormControl, Button } from 'react-bootstrap'

const SearchForm = function ({ searchBook }) {
  const [value, setValue] = useState(null)
  return (
    <div className="d-flex ">
      <FormControl
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        className="mr-3"
        placeholder="Edit book..."
      />
      <Button onClick={() => searchBook(value)} variant="success"> Search</Button>
    </div>
  )
}
export default SearchForm
