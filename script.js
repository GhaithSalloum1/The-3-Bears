const syriaHomes = [
    { title: "Old City Damascus", image: "/images/syria_1.jpg", description: "Historic courtyard house", link: "room-s1.html" },
    { title: "Aleppo Citadel View", image: "/images/syria_2.jpg", description: "Modern flat near the castle", link: "room-s2.html" },
    { title: "Latakia Resort", image: "/images/syria_3.jpg", description: "Beachfront villa", link: "room-s3.html" },
    { title: "Homs Garden Suite", image: "/images/syria_4.webp", description: "Spacious family apartment", link: "room-s4.html" },
    { title: "Tartus Sea Breeze", image: "/images/syria_5.jpg", description: "Cozy studio by the port", link: "room-s5.html" },
    { title: "Palmyra Sands", image: "/images/syria_6.jpg", description: "Desert oasis retreat", link: "room-s6.html" }
];

const lebanonHomes = [
    { title: "Beirut Downtown", image: "/images/lebanon_1.jpg", description: "Luxury loft in the heart of the city", link: "room-l1.html" },
    { title: "Byblos Ancient Harbor", image: "/images/lebanon_2.jpg", description: "Studio overlooking the ruins", link: "room-l2.html" },
    { title: "Faraya Snow Cabin", image: "/images/lebanon_3.webp", description: "Mountain chalet with fireplace", link: "room-l3.html" },
    { title: "Batroun Beach Hut", image: "/images/lebanon_4.jfif", description: "Surfside wooden cabin", link: "room-l4.html" },
    { title: "Jeita Grotto Loft", image: "/images/lebanon_5.jpg", description: "Quiet stay near the caves", link: "room-l5.html" },
    { title: "Tyre Coastal Villa", image: "/images/lebanon_6.jpg", description: "Traditional blue and white house", link: "room-l6.html" }
];

const jordanHomes = [
    { title: "Amman Rainbow St.", image: "/images/jordan_1.jpg", description: "Artist loft with city views", link: "room-j1.html" },
    { title: "Petra Cave Hotel", image: "/images/jordan_2.jpg", description: "Authentic stay inside a cave", link: "room-j2.html" },
    { title: "Wadi Rum Glamping", image: "/images/jordan_3.jpg", description: "Martian-style dome tent", link: "room-j3.html" },
    { title: "Dead Sea Spa", image: "/images/jordan_4.jpg", description: "Apartment with private pool", link: "room-j4.html" },
    { title: "Aqaba Yacht", image: "/images/jordan_5.webp", description: "Stay on a boat in the Red Sea", link: "room-j5.html" },
    { title: "Madaba Mosaic", image: "/images/jordan_6.webp", description: "Charming historical cottage", link: "room-j6.html" }
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
            <a href="#">
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

document.addEventListener('click', function (event) {
    
    const heartBtn = event.target.closest('.card-fav');

    if (heartBtn) {
        event.preventDefault(); 

        event.stopPropagation(); 

        heartBtn.classList.toggle('active');
        
        console.log("Heart toggled!");
    }
});

const mainSection = document.getElementById('main-content');

mainSection.innerHTML = 
    createFigure("Popular homes in Syria", syriaHomes) +
    createFigure("Featured stays in Lebanon", lebanonHomes) +
    createFigure("Top destinations in Jordan", jordanHomes);

  
