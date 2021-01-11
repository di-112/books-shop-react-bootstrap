import API from '../../API/API'

const SET_BOOKS = 'booksReducer/SET_BOOKS'
const SEARCH_BOOK = 'booksReducer/SEARCH_BOOK'
const TOGGLE_IS_LOADING = 'booksReducer/TOGGLE_IS_LOADING'
const SET_ALERT = 'booksReducer/SET_ALERT'

const initialState = {
   books: [],
   isLoading: false,
   alert: {},
}

const booksReducer = (state=initialState, action) => {
   let tst = []
   switch(action.type){
      case SET_BOOKS: 
      return ( {
         ...state,
         books: action.books?[...action.books]:[...state.books],
      })
      case SEARCH_BOOK: 
      return ( {
         ...state,
         books:[ action.book]
      })
      case TOGGLE_IS_LOADING: 
      return ( {
         ...state,
         isLoading: action.isLoading
      })
      case SET_ALERT: 
      return ( {
         ...state,
         alert: {...action.alert}
      })
      default: return  {...state}
   }
}

export default booksReducer

const setBooksAC = (books) => ({type: SET_BOOKS, books})
const searchBookAC = (book) => ({type: SEARCH_BOOK, book})
const toogleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading})
export const changeAlert = (alert) => ({type: SET_ALERT, alert})

export const setBooks = () => (dispatch) => {
   dispatch(toogleIsLoading(true))
   dispatch(changeAlert(false))
   API.getBooks().then(data => {
      dispatch(setBooksAC([...data]))
      dispatch(toogleIsLoading(false))
   })
}

export const sortPriceDown = () => (dispatch) => {
   dispatch(toogleIsLoading(true))
   API.getBooks().then(data => {
      dispatch(setBooksAC([...data].sort( (a,b) => b.price-a.price)))
      dispatch(toogleIsLoading(false))
   })
}

export const sortPriceUp = () => (dispatch) => {
   dispatch(toogleIsLoading(true))
   API.getBooks().then(data => {
      dispatch(setBooksAC([...data].sort( (a,b) => a.price-b.price)))
      dispatch(toogleIsLoading(false))
   })
}

export const searchBook = (bookTitle) => (dispatch) => {
   dispatch(toogleIsLoading(true))
   console.log('response.data')
   API.getBooks().then(data => {
      let isFoundBook = false  
      data.forEach(book => {
        if(book.title===bookTitle){
            dispatch(searchBookAC(book))
            isFoundBook = true
         }
      })   
      if(!isFoundBook)dispatch(changeAlert({type:'danger', show: true}))
      dispatch(toogleIsLoading(false))
   })
}