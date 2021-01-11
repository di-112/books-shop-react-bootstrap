import * as axios from 'axios'

const baseURL = 'https://web-shop-fd168-default-rtdb.firebaseio.com/books.json'

const API = {
   getBooks: ()=>{
     return axios.get(baseURL).then(response => response.data)
   }
}

export default API