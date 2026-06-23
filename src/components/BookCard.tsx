import type { Book } from "../data/books";
import "./BookCard.css";

function BookCard ({ book }: {book: Book}) {
    return (
        <article className="book-card">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.pages} sidor</p>
            <p>{book.read ? "Läst" : "Oläst"}</p>
        </article>
    );
}

export default BookCard;