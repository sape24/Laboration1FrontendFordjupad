import BookCard from './components/BookCard';
import Footer from './components/Footer';
import Header from './components/Header';
import { books } from './data/books';
import './App.css'

function App() {
  return (
    <>
    <Header title="Min boksamling"/>
    <div className='book-list'>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
    <Footer />
    </>
  )
}

export default App
