import { useState } from "react";

function BookCreate({onCreate}) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value)
       
    }


    const handleCreateSubmit =(event)=> {
        event.preventDefault();
        onCreate(title)
        setTitle('')
        
    };
    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleCreateSubmit}>
                <label>Title</label>
                <input className="input" onChange={handleChange}/>
                <button className="button">Create</button>
            </form>
            
        </div>
    )
}

export default BookCreate;