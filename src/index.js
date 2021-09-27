import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import './index.css';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

let books = [];
let book = '';

const handleChange = (event) => {
    book = event.target.value;
}

function addBook() {
    console.log('adding book...');
    books.push(book);
    console.log(books)
}

const title = 'Book Club'
const addBookLabel = 'add a book'
const headerElement = (
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
        <h1>{title}</h1>
        <div id="add-book">
            <TextField fullWidth label="Book" variant="outlined" onChange={handleChange}/>
            <Button id="btn" onClick={addBook} variant="contained">{addBookLabel}</Button>
        </div>
    </div>
);

ReactDOM.render(
    headerElement,
    document.getElementById('root')
);