document.addEventListener("DOMContentLoaded", () => {
    const bookContainer = document.getElementById("bookContainer")
    const addBookBtn = document.getElementById("addBookBtn")
    const popup = document.getElementById("popup")
    const closePopup = document.getElementById("closePopup");
    const popupTitle = document.getElementById("popupTitle");
    const popupDescription = document.getElementById("popupDescription");
    const themeToggle = document.getElementById("themeToggle");

    const books = [
        { title: "Rich Dad Poor Dad", description: "A book about financial education and investing." },
        { title: "Atomic Habits", description: "A book about building good habits and breaking bad ones." },
        { title: "The 5 AM Club", description: "A book about morning routines for success." },
        { title: "Deep Work", description: "A book about focused success in a distracted world." },
        { title: "Think and Grow Rich", description: "A classic on mindset and financial success." }
    ];
    function renderBooks() {
        bookContainer.innerHTML = "";
        books.forEach((book, index) => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");
            bookCard.innerHTML = `
                <h3>${book.title}</h3>
                <button onclick="showBook(${index})">Show</button>
            `;
            bookContainer.appendChild(bookCard);
        });
    }

    window.showBook = (index) => {
        popupTitle.textContent = books[index].title;
        popupDescription.textContent = books[index].description;
        popup.style.display = "block";
    };

    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    addBookBtn.addEventListener("click", () => {
        const newTitle = prompt("Enter book title:");
        const newDescription = prompt("Enter book description:");
        if (newTitle && newDescription) {
            books.push({ title: newTitle, description: newDescription });
            renderBooks();
        }
    });

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    renderBooks();
});
