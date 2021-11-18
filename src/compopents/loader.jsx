import React from 'react'

const Loader = function () {
  return (
    <div className="spinner">
      <div className="spinner-border text-dark" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loader
