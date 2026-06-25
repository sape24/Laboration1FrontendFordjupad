//Interface med id för varje bok för att göra den unik
export interface Book {
    id: number,
    title: string,
    author: string,
    genre: string,
    pages: number,
    read: boolean
}

export const books: Book[] = [
    {id: 1, title: "Flugornas herre", author: "William Golding", genre: "Roman", pages: 222, read: true},
    {id: 2, title: "Den gudomliga komedin", author: "Dante Allighieri", genre: "Epos", pages: 223, read: false},
    {id: 3, title: "Don Quijote", author: "Miguel Cervantes", genre: "Roman", pages: 224, read: true},
    {id: 4, title: "Processen", author: "Franz Kafka", genre: "Roman", pages: 224, read: false},
    {id: 5, title: "Sagan om ringen", author: "J.R.R. Tolkien", genre: "Fantasylitteratur", pages: 225, read: true}
];