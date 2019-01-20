import React, { Component } from 'react';
import './App.css';
import StoreHeader from './components/StoreHeader';
import BookList from './components/BookList';
import Cart from './components/Cart';
import Book from './components/Book';
import CartItem from './components/CartItem';

class App extends Component {

  state = {
    books:[],
    cart:[]
      }

  // fetch data from an api
  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({books: json})
  }

  addToCart = async (bookTitle) => {
    console.log('Hello!')
    let item = await this.state.books.find(book => book.title === bookTitle)
    this.state.cart.push(item)
    this.setState(this.state.cart)
  }

  removeFromCart = async (bookTitle) => {
    console.log('Hello!')
    let newCart = await this.state.cart.filter(cartItem => cartItem.title !== bookTitle)
    this.setState(this.state.cart)
  }

  renderBooks() {
    return this.books.map((book, i) => {
      return <Book {...book} key={i} addToCart={this.addToCart} />
    })
  }





  render() {
    return (
      <div>
        <StoreHeader />
        <div className="container bg-light">
          <div className="row">
                <div className="col-8">
                <BookList title="Book List" books={this.state.books} addToCart={this.addToCart} renderBooks={this.renderBooks}/>
                </div>
                <div className="col-4">
                  <Cart cart={this.state.cart} removeFromCart={this.removeFromCart}/>
                </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
