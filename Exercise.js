
    // Create a new book object with the provided details
    function CreatBooks(title, author, isbn,) {
        if (typeof title != "string" || title == '') {
            console.log("Please Enter Valid Book Title");
            return;
        }
        if (typeof author != "string" || author == '') {
            console.log("Please Enter Valid Author");
            return;
        }
        if (typeof isbn != "string" || isbn == '' || isbn.length !== 17) {
            console.log("Please Enter Valid isbn");
        }
    
        return {
            title: title,
            author: author,
            isbn: isbn,
            checkedOut: false,
            checkoutCount: 0,
            dueDate: null,
            rating: []
        };
    }
  

    //Library Array decler
  const library = [];
  const Max_CheckOut = 3;

   library.push(CreatBooks("The Catcher in the Rye", "J.D. Salinger", "978-0-316-76948-0"));
   library.push(CreatBooks("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4"));
   library.push(CreatBooks("1984", "George Orwell", "978-0-452-28423-4"));
   library.push(CreatBooks("The Hobbit", "J.R.R. Tolkien", "978-0-261-10215-4"));

console.log(library);

//Add Books: using function "addBookToLibrary"
function addBookToLibrary(book) {
    if (library.includes(book)) {
        console.log(`${book.title} is already exists`);
        return;
    }
    const dupIsbn = library.find(dupIsbn => dupIsbn.isbn === book.isbn);
    if (dupIsbn) {
        console.log(`A book with ISBN ${book.isbn} is already exists`);
        return;
    }
    library.push(book);
    return;
}

let book5 = CreatBooks("Pride and Prejudice", "Jane Austen", "978-0-486-55636-5");
let book6 = CreatBooks("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4");

addBookToLibrary(book5);
addBookToLibrary(book6);

console.log(library);

//CheckOut books using Isbns.

function checkoutBook(isbn, daysToReturn = 7) {
    const book = library.find(function (book) {
        return book.isbn === isbn;
    })
    if (typeof isbn !== 'string' || isbn.length !== 17) {
        console.log("Invalid Isbn")
    }
    else if (!book) {
        console.log("book is not found");
    }
    else if (book.checkoutCount == Max_CheckOut) {
        console.log(`${book.title} has reached the maximum number of checkOuts!!`)
    }
    else {
        book.checkedOut = true;
        book.checkoutCount++;
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + daysToReturn);
        book.dueDate = dueDate;
        console.log(`this book is checked out: ${book.title} and due date is ${dueDate.toDateString()}.`);
    }
}  

function listOverdueBooks() {
    const currentDate = new Date();
    const overdueBooks = library.filter(book => book.checkedOut && book.dueDate < currentDate);
    return overdueBooks;
}


console.log("checkoutBook:");
checkoutBook("978-0-261-10215-4");      //this book is checked out: The Hobbit and due date is Fri Sep 15 2023.
checkoutBook("978-0-06-112007-4");       //book is not found
checkoutBook("978-0-261-10215-4",10);   //this book is checked out: The Hobbit and due date is Fri Sep 15 2023.
checkoutBook("978-0-261-10215-");       //Invalid Isbn
checkoutBook("978-0-261-10215-4", 16);  //this book is checked out: An Equal Music and due date is Thu Sep 21 2023.
checkoutBook("978-0-261-10215-4");      //The Hobbit has reached the maximum number of checkOuts!!


