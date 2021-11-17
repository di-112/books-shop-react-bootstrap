import React from 'react'
import { observer } from 'mobx-react-lite'
import booksStore from '../store/booksStore'

const Alert = observer(() => {
  const { alert, changeAlert } = booksStore

  const className = alert.type === 'danger' ? 'alert-danger'
    : alert.type === 'success' ? 'alert-success' : 'alert-warning'

  let message = ''

  switch (className) {
    case 'alert-danger': message = 'Книга не найдена'; break
    case 'alert-success': message = 'Книга найдена'; break
    case 'alert-warning': message = 'Что-то пошло не так'; break
    default: break
  }

  return (
    <div className={`alert ${className}`}>
      <span>
        {' '}
        <strong>Внимание!</strong>
        {' '}
        {message}
        {' '}
      </span>
      <button
        onClick={() => changeAlert({ show: false, type: '' })}
        type="button"
        className="alert__closeBtn close"
      >
        &times;
      </button>
    </div>
  )
})

export default Alert
