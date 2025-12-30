const var1 = [
    { title: "Old City Breakfast", image: "images/syria_1.jpg", description: "A traditional feast in a 300-year-old courtyard house.", link: "#" },
    { title: "Souk Spice Tour", image: "images/syria_2.avif", description: "Learn the secret blends of Aleppo's historic spice markets.", link: "#" },
    { title: "Phoenician Pottery", image: "images/syria_3.jpg", description: "Master the pottery wheel with an artisan in Rashaya.", link: "#" },
    { title: "Wadi Rum Stargazing", image: "images/syria_4.jpg", description: "Bedouin tea and ancestral stories under the desert sky.", link: "#" },
    { title: "Arwad Island Sailing", image: "images/syria_5.jpg", description: "Catch and cook fresh seafood on a traditional wooden boat.", link: "#" },
    { title: "Qadisha Valley Hike", image: "images/syria_6.webp", description: "Explore ancient monasteries carved into mountain cliffs.", link: "#" }
];

const var2 = [
    { title: "Mountain Bread Making", image: "images/lebanon_1.jpg", description: "Learn to bake traditional Saj bread with a village family in the Chouf.", link: "room-l1.html" },
    { title: "Byblos Sunset Sail", image: "images/lebanon_2.webp", description: "Explore the world's oldest port city from a traditional wooden boat.", link: "room-l2.html" },
    { title: "Cedars Forest Hike", image: "images/lebanon_3.webp", description: "Walk through the thousand-year-old 'Cedars of God' mountain trails.", link: "room-l3.html" },
    { title: "Batroun Bike & Bites", image: "images/lebanon_4.jpg", description: "Ride through old stone streets and stop for famous local lemonade.", link: "room-l4.html" },
    { title: "Beirut Street Art", image: "images/lebanon_5.jpg", description: "Discover the stories behind the city's murals with a local artist . :)", link: "room-l5.html" },
    { title: "Jeita Grotto Boat Ride", image: "images/lebanon_6.jpg", description: "Glide through the illuminated underground river of a massive crystal cave.", link: "room-l6.html" }
];

const var3 = [
    { title: "Wadi Mujib Water Trail", image: "images/jordan_1.jpg", description: "Hike and splash through a massive sandstone canyon!", link: "room-j1.html" },
    { title: "Dana Reserve Trek", image: "images/jordan_2.jpg", description: "largest nature reserve, wildlife and stunning desert valleys.", link: "room-j2.html" },
    { title: "Ajloun Forest Zipline", image: "images/jordan_3.avif", description: "Fly over the green oak and pistachio forests ", link: "room-j3.html" },
    { title: "Tannourine Sinkhole", image: "images/jordan_4.jpg", description: "Visit the \"Cave of Three Bridges\" and watch the waterfall drop", link: "room-j4.html" },
    { title: "Chouf Cedar Trek", image: "images/jordan_5.jpg", description: "trek through the quiet, snow-covered cedar forests", link: "room-j5.html" },
    { title: "Litani River Rafting", image: "images/jordan_6.jpg", description: "A beginner-friendly rafting trip", link: "room-j6.html" }
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
    createFigure("Popular experiences in Syria", var1) +
    createFigure("History & Heritage", var2) +
    createFigure("Nature & Adventure", var3);
  
let lastScroll = 0;
        
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});