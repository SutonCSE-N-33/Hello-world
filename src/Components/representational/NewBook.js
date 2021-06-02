// import React,{Component} from 'react';


// class NewBook extends Component {
//    constructor(props){
//        super(props);
//        this.state={
//            bookName:"",
//            writer:"",
//            description:""
//        }
//        this.handleInputChange=this.handleInputChange.bind(this);
//        this.handleSubmit=this.handleSubmit.bind(this);
//    }


//    handleInputChange = event => {
//        console.log(event);
//        const name=event.target.name;
//        const value=event.target.value;
//           this.setState({
//                  [name]:value
//           })
//    }


//    handleSubmit = event =>{
//            console.log(this.state);
//            event.preventDefault();
//    }
   

//     render(){
//         return(
//             <div>
//                 <h1>New Book Entry</h1>
//                 <form onSubmit={ this.handleSubmit}>
//                     <label>Book Name</label>
//                     <br/>
//                     <input type="text" name="bookName" value={this.state.bookName} 
//                     onChange={  this.handleInputChange} />
//                     <br/>
//                     <label>Writer</label>
//                     <br/>
//                     <input type="text" name="writer" value={this.state.writer} 
//                     onChange={  this.handleInputChange} />
//                     <br/>
//                     <label>Description</label>
//                     <br/>
//                     <textarea name="description" value={this.state.description} 
//                     onChange={  this.handleInputChange} />
//                     <br/>
//                     <input type="submit" value="Submit" />
//                 </form>
//             </div>
//          )
//     }
   
// }

// export default NewBook;


import React,{Component} from 'react';

class NewBook extends Component{
    constructor(props){
        super(props);
        this.state={
            bookName:"",
            writer:"",
            description:""
        }
    }

    handleInputChange = event =>{
      const name=event.target.name;
      const value=event.target.value;

      this.setState({
          [name]:value
      })
    }

   handleSubmit = event =>{
       console.log(this.state);
       event.preventDefault();
   }

    render(){
        return(
            <div>
                <h2>Add a New Book</h2>
                <form onSubmit={(event)=>this.handleSubmit(event)}>
                    <label>Book Name</label>
                    <br/>
                    <input type="text" name="bookName" value={this.state.bookName} 
                    onChange={ event =>this.handleInputChange(event)} />
                    <br/>
                    <label>Writer</label>
                    <br/>
                    <input type="text" name="writer" value={this.state.writer} 
                    onChange={ event =>this.handleInputChange(event)} />
                    <br/>
                    <label>Description</label>
                    <br/>
                    <textarea name="description" value={this.state.description} 
                    onChange={ event =>this.handleInputChange(event)} />
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default NewBook;

