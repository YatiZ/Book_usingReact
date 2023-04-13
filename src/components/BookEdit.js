import { useState } from "react";
function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) =>{
       setTitle(event.target.value)
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        onSubmit(book.id, title)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="book-edit">
            <input type='text' value={title} onChange={handleChange}/>
            <button>Save</button>
            </form>
            
        </div>
    )
}

export default BookEdit;