let sports = [
    {
        "id": 1,
        "name": "Cricket",
        "image": 'cricket-1.webp',
       
    },
    {
        "id": 2,
        "name": "Football",
        "image": 'ball-1.webp',
    },
    {
        "id": 3,
        "name": "Badmitton",
        "image": 'badmitton-1.jpg',
    },
    {
        "id": 4,
        "name": "Tabeltennis",
        "image": 'tabel-3.webp',
    },
    {
        "id": 5,
        "name": "Cricket",
        "image": 'cricket-2.jpg',
    },
    {
        "id": 6,
        "name": "Badmitton",
        "image": 'cork-2.jpg',
    },
    {
        "id": 7,
        "name": "Tabeltennis",
        "image": 'tabel-1.avif',
    },
    {
        "id": 8,
        "name": "Football",
        "image": 'boot-2.webp',
    },
    {
        "id": 9,
        "name": "Cricket",
        "image": 'cricket-3.webp',
    },
    {
        "id": 10,
        "name": "Badmitton",
        "image": 'shoe-3.avif',
    },
    {
        "id": 11,
        "name": "Football",
        "image": 'gloves-3.jpg',
    },
    {
        "id": 12,
        "name": "Tabeltennis",
        "image": 'tabel-2.webp',
    }
];

let sportsList = document.querySelector('.sports-list');

function list() {
    sports.map((sports) => {
        let listItem = document.createElement('li');
        listItem.innerHTML =
            `
        
         <div class="card sports-card ${sports.name}" style="width: 18rem;">
            <img src="images/${sports.image}" class="card-img-top" alt="${sports.name}">
         </div>`;
        sportsList.appendChild(listItem);
    });
}

list();

const filterButtons = document.querySelectorAll('.buttons button');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        document.querySelectorAll('.sports-card').forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

const popup = document.querySelector(".popup");
const categoryName = popup.querySelector(".title p");
const popupImg = popup.querySelector("img");
const closeIcon = popup.querySelector(".bi");
const close = document.querySelector(".close");

const sportsCards = document.querySelectorAll('.sports-card');

sportsCards.forEach(card => {
    card.addEventListener('click', () => {
        const selectedPrevImg = card.querySelector("img").src;
        const selectedImgCategory = card.querySelector("img").alt; 

        popupImg.src = selectedPrevImg;
        categoryName.textContent = selectedImgCategory;

        popup.classList.add("show");
        close.classList.add("show");

        closeIcon.onclick = () => {
            popup.classList.remove("show");
            close.classList.remove("show");
        };
    });
});