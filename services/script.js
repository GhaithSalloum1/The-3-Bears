const syriaServices = [
    { title: "Professional Photography", image: "/images/photography.jpg", description: "Capture your happy moments", link: "room-s1.html" },
    { title: "Prepared Meals", image: "/images/prepared-meals.jpg", description: "Tasty meals from professional chefs", link: "room-s3.html" },
    { title: "Free Wi-Fi", image: "/images/free-wi-fi.jpg", description: "Stay connected everywhere", link: "room-s4.html" },
    { title: "Training", image: "/images/training.jpg", description: "No pain, No gain", link: "room-s5.html" },
    { title: "Shopping Mall", image: "/images/shopping-mall.jpg", description: "Stay on fashion even in your tour", link: "room-l4.html" },
    { title: "Catering", image: "/images/catering.jpg", description: "A very tasty desert made with love", link: "room-s6.html" }
];

const lebanonServices = [
    { title: "Swimming Pools", image: "/images/swimming-pools.jpg", description: "Practice your swimming skills", link: "room-l1.html" },
    { title: "Laundry Room", image: "/images/laundry-room.webp", description: "Professional garment care with same-day service options", link: "room-l2.html" },
    { title: "Gaming Club", image: "/images/gaming-club.jpg", description: "Fortnite, PUBG, Minecraft. Made for gamers", link: "room-j6.html" },
    { title: "Pizza Dominous", image: "/images/chefs.jpg", description: "Pizza with different flavors made by professional chefs", link: "room-s2.html" },
    { title: "Sauna", image: "/images/sauna.jpg", description: "Quiet rooms with steam to feel relaxation", link: "room-l5.html" },
    { title: "Multilingual Staff", image: "/images/multilingual-staff.jpg", description: "A big team fluent in many languages to give a welcoming experience for travelers", link: "room-l6.html" }
];

const jordanServices = [
    { title: "Mandi", image: "/images/3-meals-a-day.jpg", description: "Try this very delicous saudi-origin meal with spices", link: "room-l3.html" },
    { title: "Laundry & Dry Cleaning", image: "/images/laundry-and-dry-cleaning.jpg", description: "Even if you get dirty in your tour, we have you covered", link: "room-j1.html" },
    { title: "Personalized Pillow", image: "/images/personalized-pillow.jpg", description: "Custom your pillow to make it more beautiful", link: "room-j2.html" },
    { title: "Valet Parking Service", image: "/images/valet-parking-service.jpg", description: "Safe, secure parking managed by professional team", link: "room-j3.html" },
    { title: "Pet Friendly Program", image: "/images/pet-friendly-program.jpg", description: "Premium accommodations for your furry friends", link: "room-j4.html" },
    { title: "Kids' Club", image: "/images/kids-club.jpg", description: "Engaging, supervised activities for younger guests", link: "room-j5.html" },
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

    const cardsHTML = topSix.map(service => `
        <div class="card">
            <div class="card-fav">
                <a href="#">${heartIcon}</a>
            </div>
            <a href="#">
                <div class="card-image"><img src="${service.image}"></div>
                <div class="card-description">
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
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

function createFigure(sectionTitle, dataList) {

    const topSix = dataList.slice(0, 6); 

    const cardsHTML = topSix.map(service => `
        <div class="card">
            <div class="card-fav">
                <a href="#">${heartIcon}</a>
            </div>
            <a href="#">
                <div class="card-image"><img src="${service.image}"></div>
                <div class="card-description">
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
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
    createFigure("Services in Syria", syriaServices) +
    createFigure("Services in Lebanon", lebanonServices) +
    createFigure("Services in Jordan", jordanServices);

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