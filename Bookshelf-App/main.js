// Do your work here...
console.log('Hello, world!');
document.addEventListener('DOMContentLoaded', function() {
    const inputBookForm = document.getElementById('inputBook');
    const incompleteBookshelfList = document.getElementById('incompleteBookshelfList');
    const completeBookshelfList = document.getElementById('completeBookshelfList');
    const searchBookForm = document.getElementById('searchBook');
    const searchBookTitle = document.getElementById('searchBookTitle');

    inputBookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('inputBookTitle').value;
        const author = document.getElementById('inputBookAuthor').value;
        const year = parseInt(document.getElementById('inputBookYear').value);
        const isComplete = document.getElementById('inputBookIsComplete').checked;

        const book = {
            id: +new Date(),
            title: title,
            author: author,
            year: parseInt(year),
            isComplete: isComplete
        };

        console.table("inputBookForm:", book);
        
        addBookToShelf(book);
        saveData();
        inputBookForm.reset();
    });

    searchBookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTitle = searchBookTitle.value.trim().toLowerCase();
        searchBooks(searchTitle);
    });

    function addBookToShelf(book) {
        const bookElement = createBookElement(book);
        bookElement.setAttribute('data-id', book.id);

        if (book.isComplete) {
            completeBookshelfList.appendChild(bookElement);
        } else {
            incompleteBookshelfList.appendChild(bookElement);
        }
    }

    function createBookElement(book) {
        const article = document.createElement('article');
        article.classList.add('book_item');

        const title = document.createElement('h3');
        title.textContent = book.title;
        article.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `Penulis: ${book.author}`;
        article.appendChild(author);

        const year = document.createElement('p');
        year.textContent = `Tahun: ${book.year}`;
        article.appendChild(year);

        const action = document.createElement('div');
        action.classList.add('action');

        const buttonChangeStatus = document.createElement('button');
        if (book.isComplete) {
            buttonChangeStatus.textContent = 'Belum selesai di Baca';
            buttonChangeStatus.classList.add('green');
        } else {
            buttonChangeStatus.textContent = 'Selesai dibaca';
            buttonChangeStatus.classList.add('green');
        }

        buttonChangeStatus.addEventListener('click', function() {
            changeBookStatus(book.id);
        });
        action.appendChild(buttonChangeStatus);

        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Hapus buku';
        buttonDelete.classList.add('red');
        buttonDelete.addEventListener('click', function() {
            deleteBook(book.id);
        });
        action.appendChild(buttonDelete);

        article.appendChild(action);
        return article;
    }

    function changeBookStatus(bookId) {
        const bookElement = document.querySelector(`[data-id='${bookId}']`);
        const bookTitle = bookElement.querySelector('h3').innerText;
        const bookAuthor = bookElement.querySelector('p:nth-child(2)').innerText.slice(9);
        const bookYear = parseInt(bookElement.querySelector('p:nth-child(3)').innerText.slice(6));

        let book = {
            id: parseInt(bookId),
            title: bookTitle,
            author: bookAuthor,
            year: parseInt(bookYear),
            isComplete: !bookElement.parentNode.isSameNode(completeBookshelfList)
        };

        console.table("changeBookStatus:", book);

        bookElement.remove();
        addBookToShelf(book);
        saveData();
    }

    function deleteBook(bookId) {
        const bookElement = document.querySelector(`[data-id='${bookId}']`);
        const confirmation = confirm(`Anda yakin ingin menghapus buku "${bookElement.querySelector('h3').innerText}"?`);
        if (confirmation) {
            bookElement.remove();
            saveData();
        }
    }

    function saveData() {
        const books = [];
        
        document.querySelectorAll('.book_item').forEach(bookElement => {
            const id = parseInt(bookElement.getAttribute('data-id'));
            const title = bookElement.querySelector('h3').innerText;
            const author = bookElement.querySelector('p:nth-child(2)').innerText.slice(9);
            const year = parseInt(bookElement.querySelector('p:nth-child(3)').innerText.slice(6));
            const isComplete = bookElement.parentNode.isSameNode(completeBookshelfList);
            
            books.push({ id, title, author, year, isComplete });
        });

        localStorage.setItem('books', JSON.stringify(books));
    }

    function loadData() {
        const books = JSON.parse(localStorage.getItem('books')) || [];

        books.forEach(function(book) {
            book.id = parseInt(book.id);
            book.year = parseInt(book.year);
            addBookToShelf(book);
        });
    }

    function searchBooks(searchTitle) {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        const incompleteBookshelfList = document.getElementById('incompleteBookshelfList');
        const completeBookshelfList = document.getElementById('completeBookshelfList');

        incompleteBookshelfList.innerHTML = '';
        completeBookshelfList.innerHTML = '';

        books.forEach(book => {
            if (book.title.toLowerCase().includes(searchTitle)) {
                addBookToShelf(book);
            }
        });
    }

    loadData();
});
