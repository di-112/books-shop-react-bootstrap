import React from 'react'
import Alert from '../alert';
import Books from '../books';
import booksStore from "../../mobx/booksStore";
import {observer} from "mobx-react-lite";

const HomePage = observer(() => booksStore.alert.show?<Alert />:<Books />)

export default HomePage
