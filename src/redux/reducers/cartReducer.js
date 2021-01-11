const ADD_BOOK = 'cartReducer/ADD_BOOK'
const REMOVE_BOOK = 'cartReducer/REMOVE_BOOK' 
const INCREMENT_COUNT_BOOK = 'cartReducer/INCREMENT_COUNT_BOOK' 
const DECREMENT_COUNT_BOOK = 'cartReducer/DECREMENT_COUNT_BOOK' 


const initialState = {
   choosenBooks: [],
   allPrice: 0
}

const summa = (array) => {
   let sum=0
   for(let i=0; i<array.length; i++){
      sum=sum+array[i].price*array[i].count
   }
   return sum
}

const cartReducer = (state = initialState, action) => {
   let choosenBooks=[]
   let allPrice=0
   switch(action.type){
      case ADD_BOOK:
            choosenBooks = state.choosenBooks.concat([{ ...action.book, count: 1 }])
            allPrice = summa(choosenBooks)
            return (
               {
                  ...state,
                  choosenBooks,
                  allPrice
               })

      case REMOVE_BOOK: 
          choosenBooks=state.choosenBooks.filter(book=>book.title!=action.book.title)
          allPrice=summa(choosenBooks)
         return (
         {
            ...state,
            choosenBooks,
            allPrice
         })

      case INCREMENT_COUNT_BOOK: 
         if (state.choosenBooks.map(book=>book.title).includes(action.book.title)) {
            choosenBooks = state.choosenBooks.map(book=>{
               if(book.title===action.book.title) return {...book, count: book.count+1}
               else return book
            })
            allPrice = summa(choosenBooks)
            return (
               {
                  ...state,
                  choosenBooks,
                  allPrice
               }
            )
         }
         else return {...state}

      case DECREMENT_COUNT_BOOK: 
         if (state.choosenBooks.map(book=>book.title).includes(action.book.title)) {
            choosenBooks = state.choosenBooks.map(book=>{
               if(book.title===action.book.title&&book.count>1) return {...book, count: book.count-1}
               else return book
            })
            allPrice = summa(choosenBooks)
            return (
               {
                  ...state,
                  choosenBooks,
                  allPrice
               })
         }
         else return {...state}
      default: return ({...state})
   }
}

export default cartReducer

export const addBook = (book) => ({type: ADD_BOOK, book})

export const incrementCountBook = (book) => ({type: INCREMENT_COUNT_BOOK, book})

export const decrementCountBook = (book) => ({type: DECREMENT_COUNT_BOOK, book})

export const removeBook = (book) => ({type: REMOVE_BOOK, book})

