import React from 'react'
import Person from '../representational/Person';
import {withRouter,Link} from 'react-router-dom';

const BookList= (props) =>{
    return(
        props.books.map((book,index) => {
            return(
              <Link to={"/" + book.id} key={book.id} style={{color:"black",textDecoration:"none"}}>
              <Person name={book.bookName}
              writer={book.writer}
              selectedBookHandler={ () => props.selectedBookHandler(book.id)}
              />
              </Link>
            );
          })
    
    )
}


export default withRouter(BookList);