import type { Book } from "../data/books";

function BookCard ({ book }: {book: Book}) {
    return (
        <div>
            <h2>{book.title}</h2>
            <p>{book.pages} sidor</p>
            <p>{book.read ? "Läst" : "Oläst"}</p>
        </div>
    );
}

export default BookCard;