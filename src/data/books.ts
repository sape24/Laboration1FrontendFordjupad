export interface Book {
    id: number,
    title: string,
    pages: number,
    read: boolean
}

export const books: Book[] = [
    {id: 1, title: "Flugornas herre", pages: 222, read: true},
    {id: 2, title: "Den gudomliga komedin", pages: 223, read: false},
    {id: 3, title: "Don Quijote", pages: 224, read: true}
];