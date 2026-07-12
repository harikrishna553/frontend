class Book {
    // Static properties - shared by all books
    static libraryName: string = "Central Library"; 
    static totalBooks: number = 0;

    // Instance properties - unique to each book
    title: string;
    author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;

        // Every time a new book is created, increment the shared counter
        Book.totalBooks++;
    }

    // Instance method - describes this specific book
    describe(): string {
        return `"${this.title}" by ${this.author} (Available at ${Book.libraryName})`;
    }

    // Static method - gives overall library info
    static getLibraryInfo(): string {
        return `${Book.libraryName} currently has ${Book.totalBooks} books.`;
    }
}

// Creating books
let book1 = new Book("The Alchemist", "Paulo Coelho");
let book2 = new Book("Harry Potter", "J.K. Rowling");

// Access static property
console.log(Book.libraryName); // Central Library

// Access instance method
console.log(book1.describe()); 
console.log(book2.describe());

// Change the static property
Book.libraryName = "Downtown Library";

// Check updated values
console.log(book1.describe()); 
console.log(Book.getLibraryInfo()); 
