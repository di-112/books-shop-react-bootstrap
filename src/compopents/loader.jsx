import React from 'react'

const Loader = () => {
   return (
      <div className="spinner">
         <div className="spinner-border text-dark" role="status">
            <span className="sr-only">Loading...</span>
         </div>
      </div>
   )
}

export default Loader