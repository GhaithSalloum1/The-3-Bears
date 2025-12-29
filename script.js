const syriaHomes = [
    { title: "Old City Damascus", image: "images/Damascus1.jpg", description: "Historic courtyard house", link: "room-s1.html" },
    { title: "Aleppo Citadel View", image: "images/Aleppo1.jpg", description: "Modern flat near the castle", link: "room-s2.html" },
    { title: "Latakia Resort", image: "images/Latakia1.jpg", description: "Beachfront villa", link: "room-s3.html" },
    { title: "Homs Garden Suite", image: "images/Homs1.jpg", description: "Spacious family apartment", link: "room-s4.html" },
    { title: "Tartus Sea Breeze", image: "images/Tartus1.jpg", description: "Cozy studio by the port", link: "room-s5.html" },
    { title: "Palmyra Sands", image: "images/Palmyra1.jpg", description: "Desert oasis retreat", link: "room-s6.html" }
];

const lebanonHomes = [
    { title: "Beirut Downtown", image: "images/Beirut-Downtown.webp", description: "Luxury loft in the heart of the city", link: "room-l1.html" },
    { title: "Byblos Ancient Harbor", image: "images/Byblos1.jpg", description: "Studio overlooking the ruins", link: "room-l2.html" },
    { title: "Faraya Snow Cabin", image: "images/Faraya1.jpg", description: "Mountain chalet with fireplace", link: "room-l3.html" },
    { title: "Batroun Beach Hut", image: "images/Batroun1.jpg", description: "Surfside wooden cabin", link: "room-l4.html" },
    { title: "Jeita Grotto Loft", image: "images/Jeita1.jpg", description: "Quiet stay near the caves", link: "room-l5.html" },
    { title: "Tyre Coastal Villa", image: "images/Tyre1.jpg", description: "Traditional blue and white house", link: "room-l6.html" }
];

const jordanHomes = [
    { title: "Amman Rainbow St.", image: "images/Amman1.jpg", description: "Artist loft with city views", link: "room-j1.html" },
    { title: "Petra Cave Hotel", image: "images/Petra1.jpg", description: "Authentic stay inside a cave", link: "room-j2.html" },
    { title: "Wadi Rum Glamping", image: "images/WadiRum1.jpg", description: "Martian-style dome tent", link: "room-j3.html" },
    { title: "Dead Sea Spa", image: "images/DeadSea1.jpg", description: "Apartment with private pool", link: "room-j4.html" },
    { title: "Aqaba Yacht", image: "images/Aqaba1.jpg", description: "Stay on a boat in the Red Sea", link: "room-j5.html" },
    { title: "Madaba Mosaic", image: "images/Madaba1.jpg", description: "Charming historical cottage", link: "room-j6.html" }
];


const heartIcon = `
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" 
         role="presentation" focusable="false" 
         style="display: block; fill: rgba(0, 0, 0, 0.5); height: 24px; width: 24px; 
                stroke: white; stroke-width: 2; overflow: visible;">
        <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z"></path>
    </svg>`;
    

function createFigure(sectionTitle, dataList) {

    const topSix = dataList.slice(0, 6); 

    const cardsHTML = topSix.map(home => `
        <div class="card">
            <div class="card-fav">
                <a href="#">${heartIcon}</a>
            </div>
            <a href="${home.link}">
                <div class="card-image"><img src="${home.image}"></div>
                <div class="card-description">
                    <h3>${home.title}</h3>
                    <p>${home.description}</p>
                </div>
            </a>
        </div>
    `).join('');

    return `
        <div class="cards-figure">
            <div class="cards-container">
                <h2>${sectionTitle}</h2>
                <div class="cards-row">${cardsHTML}</div>
            </div>
        </div>
    `;
}

const mainSection = document.getElementById('main-content');

mainSection.innerHTML = 
    createFigure("Popular homes in Syria", syriaHomes) +
    createFigure("Featured stays in Lebanon", lebanonHomes) +
    createFigure("Top destinations in Jordan", jordanHomes);

  
