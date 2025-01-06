document.addEventListener('DOMContentLoaded', function() {
    const inputBookForm = document.getElementById('bookForm');
    const incompleteBookshelfList = document.getElementById('incompleteBookList');
    const completeBookshelfList = document.getElementById('completeBookList');
    const searchBookForm = document.getElementById('searchBook');
    const searchBookTitle = document.getElementById('searchBookTitle');

    inputBookForm.addEventListener('submit', handleAddBook);

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

        const editButton = document.createElement('button');
        editButton.setAttribute('data-testid', 'bookItemEditButton');
        editButton.textContent = 'Edit buku';
        editButton.addEventListener('click', function() {
            editBook(book);
        });

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('data-testid', 'bookItemDeleteButton');
        deleteButton.textContent = 'Hapus buku';
        deleteButton.addEventListener('click', function() {
            deleteBook(book.id);
        });

        actionContainer.appendChild(changeStatusButton);
        actionContainer.appendChild(editButton);
        actionContainer.appendChild(deleteButton);

        bookContainer.appendChild(titleElement);
        bookContainer.appendChild(authorElement);
        bookContainer.appendChild(yearElement);
        bookContainer.appendChild(actionContainer);

        return bookContainer;
    }

    function editBook(book) {
        const titleInput = document.getElementById('bookFormTitle');
        const authorInput = document.getElementById('bookFormAuthor');
        const yearInput = document.getElementById('bookFormYear');
        const isCompleteCheckbox = document.getElementById('bookFormIsComplete');

        // Prefill form with existing book data
        titleInput.value = book.title;
        authorInput.value = book.author;
        yearInput.value = book.year;
        isCompleteCheckbox.checked = book.isComplete;

        // Temporarily change the submit button text
        const submitButton = document.getElementById('bookFormSubmit');
        submitButton.textContent = 'Update Buku';

        // Change form submit behavior to handle edit
        inputBookForm.onsubmit = function(event) {
            event.preventDefault();

            // Update book data
            const updatedTitle = titleInput.value;
            const updatedAuthor = authorInput.value;
            const updatedYear = parseInt(yearInput.value);
            const updatedIsComplete = isCompleteCheckbox.checked;

            if (!updatedTitle || !updatedAuthor || isNaN(updatedYear)) {
                alert('Mohon lengkapi semua data buku dengan benar!');
                return;
            }

            book.title = updatedTitle;
            book.author = updatedAuthor;
            book.year = updatedYear;
            book.isComplete = updatedIsComplete;

            // Remove old book element
            const oldBookElement = document.querySelector(`[data-bookid="${book.id}"]`);
            if (oldBookElement) {
                oldBookElement.remove();
            }

            // Add updated book to shelf
            addBookToShelf(book);
            saveData();

            // Reset form and revert button text
            inputBookForm.reset();
            submitButton.textContent = 'Masukkan Buku ke rak';

            // Restore default behavior of the form
            inputBookForm.onsubmit = handleAddBook;
        };
    }

    function handleAddBook(event) {
        event.preventDefault();
        const title = document.getElementById('bookFormTitle').value;
        const author = document.getElementById('bookFormAuthor').value;
        const year = parseInt(document.getElementById('bookFormYear').value);
        const isComplete = document.getElementById('bookFormIsComplete').checked;

        if (!title || !author || isNaN(year)) {
            alert('Mohon lengkapi semua data buku dengan benar!');
            return;
        }

        const newBook = {
            id: +new Date(),
            title: title,
            author: author,
            year: year,
            isComplete: isComplete
        };

        addBookToShelf(newBook);
        saveData();
        inputBookForm.reset();
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
