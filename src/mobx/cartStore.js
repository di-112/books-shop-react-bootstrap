import {makeAutoObservable} from "mobx";

class CartStore {
  choosenBooks = []
  allPrice =  0

  constructor() {
    makeAutoObservable(this)
  }

  summa = (array) => {
    let sum=0
    for(let i=0; i<array.length; i++){
      sum=sum+array[i].price*array[i].count
    }
    return sum
  }

  addBook = (book) => {
   this.choosenBooks = this.choosenBooks.concat([{ ...book, count: 1 }])
    this.allPrice = this.summa(this.choosenBooks)
    console.log(this.choosenBooks, this.allPrice)
  }

  removeBook = (book) => {
    this.choosenBooks = this.choosenBooks.filter(currentBook=>currentBook.title!==book.title)
    this.allPrice= this.summa(this.choosenBooks)
    console.log(this.choosenBooks, this.allPrice)
  }

  incrementCountBook = (book) => {
    if (this.choosenBooks.map(currentBook => currentBook.title).includes(book.title)) {
      this.choosenBooks = this.choosenBooks.map(currentBook => {
        if (currentBook.title === book.title) return {...currentBook, count: currentBook.count + 1}
        else return currentBook
      })
      this.allPrice = this.summa(this.choosenBooks)
    }
    console.log(this.choosenBooks, this.allPrice)
  }

  decrementCountBook = (book) => {
    if (this.choosenBooks.map(currentBook=>currentBook.title).includes(book.title)) {
      this.choosenBooks = this.choosenBooks.map(currentBook=>{
        if(currentBook.title=== book.title&&currentBook.count>1) return {...currentBook, count: currentBook.count-1}
        else return currentBook
      })
      this.allPrice = this.summa(this.choosenBooks)
    }
    console.log(this.choosenBooks, this.allPrice)
  }
}

export default new CartStore()
