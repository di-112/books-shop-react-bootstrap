import {action, makeAutoObservable, makeObservable, runInAction} from "mobx";
import API from "../API/API";
import {changeAlert} from "../redux/reducers/booksReducer";

class BooksStore {
  books = []
  isLoading = false
  alert = {}
  constructor() {
    makeAutoObservable(this)
  }

  setBooks = async () => {
    this.isLoading = true
    this.alert = false
    const books = await API.getBooks()
    this.books = books || this.books
    this.isLoading = false
  }



  sortPriceDown = () => {
    this.isLoading = true
    API.getBooks().then(data => {
      this.books = [...data].sort( (a,b) => b.price-a.price) || this.books
      this.isLoading = false
    })
  }

  sortPriceUp = () => {
    this.isLoading = true
    API.getBooks().then(data => {
      this.books = [...data].sort( (a,b) => a.price-b.price) || this.books
      this.isLoading = false
    })
  }

  searchBook = (bookTitle)  => {
   this.isLoading = true
    API.getBooks().then(data => {
      let isFoundBook = false
      let books = []
      data.forEach(book => {
        if(book.title.toLowerCase().includes(bookTitle.toLowerCase())){
          books.push(book)
          isFoundBook = true
        }
      })
      if(isFoundBook) this.books = books
      if(!isFoundBook) this.alert = {type:'danger', show: true}
      this.isLoading = false
    })
  }

  changeAlert = alert => this.alert = alert
}

export default new BooksStore()
