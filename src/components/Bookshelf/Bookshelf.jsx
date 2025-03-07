import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        {
        title: 'Fourth Wing',
        author: 'Rebecca Varros',
        },
        {
        title: 'The Lion, the Witch and the Wardrobe',
        author: 'C.S. Lewis',
        },
    ]);

    const [newBook, setNewBook] = useState(
        {
            title: '',
            author: '',
        }
    );

    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: [event.target.value]});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks((shelvedBooks) => [...shelvedBooks, newBook]);
        setNewBook({
            title: '',
            author: '',
        });
    };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <p>Title:</p>
                    <input
                    type='text'
                    name='title'
                    value={newBook.title}
                    onChange={handleInputChange}
                    />
                    <p>Author:</p>
                    <input
                    type='text'
                    name='author'
                    value={newBook.author}
                    onChange={handleInputChange}
                    />
                    <button type='submit'>Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv"></div>
        </div>
    );
};

export default Bookshelf;