function App() {
    const [books, setBooks] = React.useState([]);
    const [selectedBook, setSelectedBook] = React.useState(null);

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch('./books.json');
            const data = await response.json();
            setBooks(data.books);
        }
        fetchData();
    }, []);

    const handleBookSelect = (book) => {
        setSelectedBook(book);
    };

    return (
        <div className="container">
            <h1>Book List Links</h1>
            {!selectedBook && (
                <ul className="list-unstyled">
                    {books.map((book, index) => (
                        <li key={index} onClick={() => handleBookSelect(book)} className="purple-link" style={{ cursor: 'pointer' }}>
                            {book.title}
                        </li>
                    ))}
                </ul>
            )}
            {selectedBook && (
                <div>
                    <h2>{selectedBook.title}</h2>
                    <p><strong>Author:</strong> {selectedBook.author}</p>
                    <p><strong>Subtitle:</strong> {selectedBook.subtitle}</p>
                    <p><strong>Publisher:</strong> {selectedBook.publisher}</p>
                    <p><strong>Description:</strong> {selectedBook.description}</p>
                    <button className="btn btn-primary" onClick={() => setSelectedBook(null)}>Back to list</button>
                </div>
            )}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
