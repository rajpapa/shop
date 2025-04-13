// Sample shoe data with affiliate links
const shoes = [
    {
        name: "Nike Air Zoom",
        price: "₹8,999",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
        affiliateLink: "https://your-affiliate-link.com/nike-air-zoom"
    },
    {
        name: "Adidas NMD",
        price: "₹7,499",
        image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd3de",
        affiliateLink: "https://your-affiliate-link.com/adidas-nmd"
    },
    {
        name: "Puma Velocity",
        price: "₹6,499",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
        affiliateLink: "https://your-affiliate-link.com/puma-velocity"
    },
    {
        name: "Reebok Flex",
        price: "₹5,999",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd18f8f8",
        affiliateLink: "https://your-affiliate-link.com/reebok-flex"
    }
];

// Toggle mobile menu
function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}

// Display shoes
function displayShoes(shoeList, gridId) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = "";
    shoeList.forEach(shoe => {
        const shoeCard = document.createElement("div");
        shoeCard.classList.add("shoe-card");
        shoeCard.innerHTML = `
            <img src="${shoe.image}" alt="${shoe.name}" loading="lazy">
            <h3>${shoe.name}</h3>
            <p>${shoe.price}</p>
            <a href="${shoe.affiliateLink}" target="_blank">Buy Now</a>
        `;
        grid.appendChild(shoeCard);
    });
}

// Search functionality
function searchShoes() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredShoes = shoes.filter(shoe => shoe.name.toLowerCase().includes(searchInput));
    displayShoes(filteredShoes, "shoeGrid");
    displayShoes(filteredShoes, "dealsGrid");
}

// Initial load
displayShoes(shoes, "shoeGrid");
displayShoes(shoes.slice(0, 3), "dealsGrid");

