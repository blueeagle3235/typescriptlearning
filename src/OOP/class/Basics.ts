class Book {
  // abstraction and encapsulation
  // Abstraction is the concept of object-oriented programming that “shows” only essential attributes and “hides” unnecessary information. The main purpose of abstraction is hiding the unnecessary details from the users.
  // Encapsulation is one of the fundamentals of OOP. It refers to the bundling of data with the methods that operate on that data. Encapsulation is used to hide the values or state of a structured data object inside a class, preventing unauthorized parties' direct access to them.
  // by default it's public without private
  // fields
  private title: string;
  private pages: number;
  private isbn: string;

  // properties, setters and getters
  public get Title() {
    return this.title;
  }
  public set Title(value) {
    this.title = value;
  }

  //constructor initializes the values for fields for "new" operator
  constructor(title: string, pages: number, isbn: string) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  //methods
  public PrintIsbn() {
    console.log(this.isbn);
  }
}

let book = new Book("typescript for dummies", 100, "isbn1234");

console.log(book.Title); //outputs the book title

book.Title = "new title"; //update the value of the book title

book.PrintIsbn();
console.log(book.Title); //outputs the book title

//inheritance
class ITBook extends Book {
  technology: string;

  constructor(title: string, pages: number, isbn: string, technology: string) {
    super(title, pages, isbn);
    this.technology = technology;
  }

  //polymorphism
  //https://blog.jetbrains.com/webstorm/2019/03/write-object-oriented-typescript-polymorphism/
  public PrintIsbn() {
    console.log("calling super.PrintIsbn");
    super.PrintIsbn();
  }

  public PrintTechnology() {
    console.log(this.technology);
  }
}

let jsBook = new ITBook(
  "Learning JS Algorithms",
  200,
  "1234567890",
  "JavaScript"
);

console.log(jsBook.Title);
jsBook.PrintIsbn();
jsBook.PrintTechnology();
