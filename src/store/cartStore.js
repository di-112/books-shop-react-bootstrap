import { makeAutoObservable } from 'mobx'

class CartStore {
  choosenBooks = []

  allPrice = 0

  constructor() {
    makeAutoObservable(this)
  }

  summa = array => array.reduce((sum, book) => sum + book.price * book.count, 0)

    addBook = book => {
      this.choosenBooks = this.choosenBooks.concat([{ ...book, count: 1 }])
      this.allPrice = this.summa(this.choosenBooks)
    }

  removeBook = book => {
    this.choosenBooks = this.choosenBooks.filter(currentBook => currentBook.title !== book.title)
    this.allPrice = this.summa(this.choosenBooks)
  }

  incrementCountBook = book => {
    if (this.choosenBooks.map(currentBook => currentBook.title).includes(book.title)) {
      this.choosenBooks = this.choosenBooks.map(currentBook => {
        if (currentBook.title === book.title) return { ...currentBook, count: currentBook.count + 1 }
        return currentBook
      })
      this.allPrice = this.summa(this.choosenBooks)
    }
  }

  decrementCountBook = book => {
    if (this.choosenBooks.map(currentBook => currentBook.title).includes(book.title)) {
      this.choosenBooks = this.choosenBooks.map(currentBook => {
        if (currentBook.title === book.title
          && currentBook.count > 1) return { ...currentBook, count: currentBook.count - 1 }
        return currentBook
      })
      this.allPrice = this.summa(this.choosenBooks)
    }
  }
}

export default new CartStore()
