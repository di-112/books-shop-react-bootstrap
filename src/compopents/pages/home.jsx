import React from 'react'
import { observer } from 'mobx-react-lite'
import Alert from '../alert'
import Books from '../books'
import booksStore from '../../store/booksStore'

const HomePage = observer(() => (booksStore.alert.show ? <Alert /> : <Books />))

export default HomePage
