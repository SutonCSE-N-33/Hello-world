import React,{Component} from 'react';
import books from '../../assets/books';
import BookList from '../List/BookList';
import NewBook from './NewBook';
import BookDetail from './BookDetail'
import {Route,NavLink,Redirect,Switch} from 'react-router-dom';
class MainComponent extends Component{

    state={
        books:books,
        selectedBook:null
      }
    
    
      // changeBookState= newBook =>{
      //   this.setState({
      //     books:[
      //       {bookName: newBook, writer: "george Well"},
      //       {bookName: "Bengali", writer: "hasan"},
      //       {bookName: "Math", writer: "Hazary nug"},
      //       {bookName: "Physics", writer: "newton"}
      //     ]
      //   })
      // }
    
    
     
    
    //  inputWithChange = (event,index) => {
    //    const book={
    //      ...this.state.books[index]
    //    }
    //    book.bookName=event.target.value;
    
    //    const books=[this.state.books];
    //    books[index]=book;
    //    this.setState({ books: books});
    //  }
    
    // toggleBooks= () =>{
    //           this.setState({showBooks: !this.state.showBooks});
    // }


    selectedBookHandler= bookId =>{
      const book=this.state.books.filter(book => 
        book.id===bookId)[0];

      this.setState({
        selectedBook:book
      })
    }
    
      render(){
    
        //  let books=null;
    
        //  if(this.state.showBooks){
        //  }
    
         const books= <BookList books={this.state.books} 
         selectedBookHandler={this.selectedBookHandler}
         />
         
    
        return(
          <div className="App">
            <nav className="nav-bar">
              <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/new-book">NewBook</NavLink></li>
              </ul>
            </nav>
            <Switch>
             <Route path="/books" exact render={ () => books } />
             <Route path="/new-book" exact component={NewBook} />
             <Route path="/:id" render={ () => <BookDetail book={this.state.selectedBook} /> } />
             <Redirect from="/" to="/books"/>
             </Switch>
          </div>
        )
      }
}

export default MainComponent;