import React from 'react'
import { observer } from 'mobx-react-lite'
import { Alert as AlertBS } from 'react-bootstrap'
import booksStore from '../store/booksStore'

const Alert = observer(() => {
  const { alert, changeAlert } = booksStore
  let message = ''

  switch (alert.type) {
    case 'danger': message = 'Книга не найдена'; break
    case 'success': message = 'Книга найдена'; break
    case 'warning': message = 'Что-то пошло не так'; break
    default: break
  }

  return (
    <AlertBS variant={alert.type} onClose={() => changeAlert({ show: false, type: '' })} dismissible>
      <AlertBS.Heading>Внимание</AlertBS.Heading>
      <p>
        {message}
      </p>
    </AlertBS>
  )
})

export default Alert
