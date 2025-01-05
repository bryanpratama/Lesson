document.addEventListener('DOMContentLoaded', function() {
    const inputBookForm = document.getElementById('bookForm');
    const incompleteBookshelfList = document.getElementById('incompleteBookList');
    const completeBookshelfList = document.getElementById('completeBookList');
    const searchBookForm = document.getElementById('searchBook');
    const searchBookTitle = document.getElementById('searchBookTitle');

    inputBookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('bookFormTitle').value;
        const author = document.getElementById('bookFormAuthor').value;
        const year = parseInt(document.getElementById('bookFormYear').value);
        const isComplete = document.getElementById('bookFormIsComplete').checked;

        const book = {
            id: +new Date(),
            title: title,
            author: author,
            year: year,
            isComplete: isComplete
        };

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
        bookElement.setAttribute('data-bookid', book.id);

        if (book.isComplete) {
            completeBookshelfList.appendChild(bookElement);
        } else {
            incompleteBookshelfList.appendChild(bookElement);
        }
    }

    function createBookElement(book) {
        const bookContainer = document.createElement('div');
        bookContainer.setAttribute('data-bookid', book.id);
        bookContainer.setAttribute('data-testid', 'bookItem');

        const titleElement = document.createElement('h3');
        titleElement.setAttribute('data-testid', 'bookItemTitle');
        titleElement.textContent = book.title;

        const authorElement = document.createElement('p');
        authorElement.setAttribute('data-testid', 'bookItemAuthor');
        authorElement.textContent = `Penulis: ${book.author}`;

        const yearElement = document.createElement('p');
        yearElement.setAttribute('data-testid', 'bookItemYear');
        yearElement.textContent = `Tahun: ${book.year}`;

        const actionContainer = document.createElement('div');

        const changeStatusButton = document.createElement('button');
        changeStatusButton.setAttribute('data-testid', 'bookItemIsCompleteButton');
        changeStatusButton.textContent = book.isComplete ? 'Belum selesai dibaca' : 'Selesai dibaca';
        changeStatusButton.addEventListener('click', function() {
            changeBookStatus(book.id);
        });

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('data-testid', 'bookItemDeleteButton');
        deleteButton.textContent = 'Hapus buku';
        deleteButton.addEventListener('click', function() {
            deleteBook(book.id);
        });

        actionContainer.appendChild(changeStatusButton);
        actionContainer.appendChild(deleteButton);

        bookContainer.appendChild(titleElement);
        bookContainer.appendChild(authorElement);
        bookContainer.appendChild(yearElement);
        bookContainer.appendChild(actionContainer);

        return bookContainer;
    }

    function changeBookStatus(bookId) {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        const bookIndex = books.findIndex(book => book.id === bookId);
        if (bookIndex !== -1) {
            books[bookIndex].isComplete = !books[bookIndex].isComplete;
            localStorage.setItem('books', JSON.stringify(books));
            loadData();
        }
    }

    function deleteBook(bookId) {
        let books = JSON.parse(localStorage.getItem('books')) || [];
        books = books.filter(book => book.id !== bookId);
        localStorage.setItem('books', JSON.stringify(books));
        loadData();
    }

    function saveData() {
        const books = [];

        document.querySelectorAll('[data-testid="bookItem"]').forEach(bookElement => {
            const book = {
                id: parseInt(bookElement.getAttribute('data-bookid')),
                title: bookElement.querySelector('[data-testid="bookItemTitle"]').textContent,
                author: bookElement.querySelector('[data-testid="bookItemAuthor"]').textContent.slice(9),
                year: parseInt(bookElement.querySelector('[data-testid="bookItemYear"]').textContent.slice(7)),
                isComplete: bookElement.parentNode.id === 'completeBookList'
            };
            books.push(book);
        });

        localStorage.setItem('books', JSON.stringify(books));
    }

    function loadData() {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        incompleteBookshelfList.innerHTML = '';
        completeBookshelfList.innerHTML = '';

        books.forEach(book => addBookToShelf(book));
    }

    function searchBooks(searchTitle) {
        const books = JSON.parse(localStorage.getItem('books')) || [];
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
