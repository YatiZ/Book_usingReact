import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreate = (title) => {
    const updatedBook = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];

    setBooks(updatedBook);
  };

  const editById = (id,newTitle) =>{
    const updatedBook = books.map((book) => {
        if( book.id === id){
            return {...book ,title:newTitle}
        }
        return book;
    })
    setBooks(updatedBook)
  }
  const removedBookId = (id) =>{
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
