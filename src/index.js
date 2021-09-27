import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import './index.css';

class App extends React.Component {

    books = ['test','example','books'];

    constructor(props){
        super(props);
        this.state = {
            book: ''
        };
        
    }

    componentDidMount() {
        this.setState({});
    } 

    handleChange = (event) => {
       this.state.book = event.target.value;
    }
    
    addBook() {
        console.log('adding book...');
        this.books.push(this.state.book);
        console.log(this.books);
        this.setState({reload: true})
    }
    
    title = 'Book Club'
    addBookLabel = 'add a book'
    headerElement = (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
            <h1>{this.title}</h1>
            <div id="add-book">
                <TextField fullWidth label="Book" variant="outlined" onChange={this.handleChange}/>
                <Button id="btn" onClick={this.addBook} variant="contained">{this.addBookLabel}</Button>
            </div>
            <div id="list-books">{this.books.map(liBook => <div>{liBook}</div>)}</div>
        </div>
    );

    render() {
        return this.headerElement;
    }
}



ReactDOM.render(
    <App/>,
    document.getElementById('root')
);