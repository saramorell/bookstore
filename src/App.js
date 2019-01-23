import React, { Component } from 'react';
import './App.css';
import StoreHeader from './components/StoreHeader';
import BookList from './components/BookList';
import Cart from './components/Cart';
import Book from './components/Book';

class App extends Component {

  state = {
    books:[],
    filteredBooks:[]
      }

  // fetch data from an api
  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({books: json, filteredBooks: json} )
  }

  handelChange = (inputText) => {
    let filteredList = this.state.books.filter(book => book.title.toLowerCase().indexOf(inputText.toLowerCase()) !== -1 || book.author.toLowerCase().indexOf(inputText.toLowerCase()) !== -1)
      this.setState({ filteredBooks: filteredList })

  }


  addToCart = async (bookId) => {
    const patchResponse = await fetch(`http://localhost:8082/api/books/cart/add/${bookId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
    const updatedBook = await patchResponse.json()

    let indexOfBookToChange = this.state.books.findIndex(book => book.id === bookId)
    console.log(indexOfBookToChange)

      this.setState({
          books: [...this.state.books.slice(0,indexOfBookToChange), updatedBook, ...this.state.books.slice(indexOfBookToChange + 1)]
      })
  }

  removeFromCart = async (bookId) => {
    const removeResponse = await fetch(`http://localhost:8082/api/books/cart/remove/${bookId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
    const removedBook = await removeResponse.json()

    let indexOfBookToChange = this.state.books.findIndex(book => book.id === bookId)
    console.log(indexOfBookToChange)

      this.setState({
          books: [...this.state.books.slice(0,indexOfBookToChange), removedBook, ...this.state.books.slice(indexOfBookToChange + 1)]
      })
  }

  calculateCart = () => {
    let cartItems = this.state.books.filter(book => book.inCart)
      return cartItems
  }

  renderBooks = () => {
    return this.state.filteredBooks.map((b, i) => {
      return <Book {...b} key={i} addToCart={this.addToCart} />
    })
  }



  render() {
    return (
      <div>
        <StoreHeader handelChange={this.handelChange}
         />
        <div className="container bg-light">
          <div className="row">
                <div className="col-8">
                  <BookList title="Book List" books={this.state.books} addToCart={this.addToCart} renderBooks={this.renderBooks}/>
                </div>
                <div className="col-4">
                  <Cart cart={this.calculateCart()} removeFromCart={this.removeFromCart}/>
                </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
