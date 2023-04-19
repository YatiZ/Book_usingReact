import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
import { useState,useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async()=>{
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data)
  }

  useEffect (() => {
    fetchBooks();
  },[]);
  

  const handleCreate = async(title) => {
    const response = await axios.post('http://localhost:3001/books',
    {title,}
    );
    const updatedBook = [
      ...books,
      response.data,
    ];

    setBooks(updatedBook);
  };

  const editById = async(id,newTitle) =>{
    const response = await axios.put(`http://localhost:3001/books/${id}`, {title: newTitle});
    
    const updatedBook = books.map((book) => {
        if( book.id === id){
            return {...book ,...response.data}
        }
        return book;
    })
    setBooks(updatedBook)
  }
  const removedBookId =async (id) =>{
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBook = books.filter((book) => {
        return book.id !== id;
    })
    setBooks(updatedBook);
  }

  return (
    <div className="app">
      <h1>Reading List: {books.length}</h1>
      <BookList onEdit={editById} books={books} onDelete = {removedBookId} />
      <BookCreate onCreate={handleCreate} />
    </div>
  );
}

export default App;
