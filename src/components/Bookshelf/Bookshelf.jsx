import { userState } from 'react';

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

    const [newBook, setNewBook] = userState(
        {
            title: '',
            author: '',
        }
    );

    const handInputChange = (event) => {
        setNewBook({ ...newbook, [event.target.name]: [event.target.value]});
    };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
            </div>
            <div className="bookCardsDiv"></div>
        </div>
    );
};

export default Bookshelf;