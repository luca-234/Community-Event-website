let eventData = JSON.parse(localStorage.getItem('eventData')) || {}
/* data collection */
let Events = JSON.parse(localStorage.getItem('events')) || [
    {
        eventTitle: "Annual Sports Day",
        startDate: "2025-09-01",
        startTime: "09:00",
        stopTime: "17:00",
        description: "A day full of exciting sports competitions for all ages.",
        location: "Bamenda I",
        categories: ["Sports", "Community"],
        keyword: ["sports", "education"],
        image: "./images/sportimg.jpg",
        session: "Morning",
        attendance: 0,
        price: 0,
        status: "upcoming",
        id: "Annual_Sports_Day_2025-09-01"
    },
    {
        eventTitle: "Tech Innovators Conference",
        startDate: "2025-10-15",
        startTime: "10:00",
        stopTime: "16:00",
        description: "A conference bringing together tech leaders and innovators.",
        location: "Bamenda III",
        categories: ["Technology", "Business"],
        keyword: ["tech", "innovation"],
        image: "./images/techimg.jpg",
        session: "Full Day",
        attendance: 0,
        price: 50,
        status: "upcoming",
        id: "Tech_Innovators_Conference_2025-10-15"
    },
    {
        eventTitle: "City Marathon",
        startDate: "2025-11-05",
        startTime: "06:00",
        stopTime: "14:00",
        description: "Join runners from around the country in our annual marathon.",
        location: "Bamenda II",
        categories: ["Sports", "Health"],
        keyword: ["marathon", "fitness"],
        image: "./images/dance.jpg",
        session: "Morning",
        attendance: 0,
        price: 20,
        status: "upcoming",
        id: "City_Marathon_2025-11-05"
    },
    {
        eventTitle: "Art & Culture Festival",
        startDate: "2025-08-20",
        startTime: "12:00",
        stopTime: "20:00",
        description: "Celebrating art, music, and culture from around the world.",
        location: "Bamenda III",
        categories: ["Art", "Music"],
        keyword: ["art", "culture"],
        image: "./images/arts.jpeg",
        session: "Afternoon",
        attendance: 0,
        price: 10,
        status: "upcoming",
        id: "Art_&_Culture_Festival_2025-08-20"
    },
    {
        eventTitle: "Startup Pitch Night",
        startDate: "2025-09-25",
        startTime: "18:00",
        stopTime: "21:00",
        description: "Watch entrepreneurs pitch their startups to investors.",
        location: "Bamenda I",
        categories: ["Business", "Entrepreneurship"],
        keyword: ["startups", "investment"],
        image: "./images/techimg.jpg",
        session: "Evening",
        attendance: 0,
        price: 0,
        status: "upcoming",
        id: "Startup_Pitch_Night_2025-09-25"
    },
    {
        eventTitle: "Cooking Masterclass",
        startDate: "2025-10-10",
        startTime: "14:00",
        stopTime: "17:00",
        description: "Learn from professional chefs in this interactive cooking session.",
        location: "Bamenda II",
        categories: ["Food", "Education"],
        keyword: ["cooking", "learning"],
        image: "./images/cookingimg.jpg",
        session: "Afternoon",
        attendance: 0,
        price: 15,
        status: "upcoming",
        preciseLocation: 'mile 2',
        id: "Cooking_Masterclass_2025-10-10"
    }
];

let sorted = []
let filtered = []
let item
//gets date of today
let date = new Date();
/* variable to decide weather there is a query for a filter or not then determine
weather to render filtered list or Events list*/
let isQueried = false
//gets the form wich will act ass event 
let formSubmit = document.querySelector('.save-btn')
const addToEvents = (item)=> {
    if(item){
        Events.push(item)
        localStorage.setItem('events', JSON.stringify(Events))
    }
}



formSubmit.addEventListener('click', ()=>{
    getData()
})

function getData(){
    
    let eventTitle = document.getElementById('event-title').value
    let categories = document.getElementById('event-category').value
    let session = document.getElementById('event-session').value
    let startDate = document.getElementById('start-date').value
    let startTime = document.getElementById('start-time').value
    let stopTime = document.getElementById('end-time').value
    let location = document.getElementById('event-location').value
    let description = document.getElementById('event-description').value
    let preciseLocation = document.getElementById('eventLocation').value
    let imageElem = document.getElementById('event-image')
    
    let image = URL.createObjectURL(imageElem.files[0])

    item = {
        eventTitle,
        startDate,
        startTime,
        stopTime,
        description,
        location,
        categories,
        keyword: ['sports', 'eduction'],
        image,
        session,
        attendance: 0,
        price: 0,
        preciseLocation,
        status: 'upcomming',
        id : ((eventTitle + startDate).split(' ').join(''))
    }
    addToEvents(item)
    renderPage()
}



// testingEvents()
/*sorting function property to sort  by is passed */
function sorting(property){
    sorted = Events.slice().sort((a, b) => (a[property]).localeCompare(b[property]));
}

/*filtering categories, location and search keyWord */

function filtering(category = '', location = '', search ='' , date = ''){
    let categories = []
    let findLocation = []
    let keyWord = []
    let foundDates = []

    categories = Events.filter((item)=>{
        if ((item.categories).includes(category)){
            return true
        }
        
        else return false
    })
    
    
    findLocation = Events.filter((item)=> {
        if((item.location) === location){
            return true
        }
        else return false
    })
    
    keyWord = Events.filter((item)=>{
        if ((item.keyword).includes(search) || item.eventTitle === search){
            return true
        }
        
        else return false
    })

    foundDates = Events.filter((item)=> {
        if((item.startDate) === date){
            return true
        }
        else return false
    })
    filtered = ((keyWord.concat(findLocation)).concat(categories)).concat(foundDates)
}


/* function that desides wich list gets redered */
function List(){
    let category = document.querySelector('#select-category').value
    let location = document.getElementById('select-location').value
    let keyWord = document.querySelector('#keyword').value
    let date = document.querySelector('#date-search').value
    if(!(!keyWord) || category != "Category" || location != 'location' || !(!date)){
        isQueried = true
    }

    else {
        isQueried = false
    }
    
    filtering(category , location, keyWord, date)
    return  isQueried ? filtered : sorted
}

/*function that renders events in the event section */
function renderEvents(){
    let html = ''
    List().forEach(item=>{
        let itemDate = new Date(item.startDate)
        const shortMonth = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(itemDate);
        // const longMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(itemDate);
        let itemHtml = 
        `
        <a href="./event.html">
             <div class="event-card" data-item-id=${item.id}>
                      <img src=${item.image} width = '5%'
                       
                       class="event-img">
                   <span class="event-category tech">${item.categories}</span>
                   <button class="event-fav">&#9734;</button>
                   <div class="event-info">
                       <div class="event-date">
                           <span class="event-month">${itemDate.getDate()}</span>
                           <span class="event-day">${shortMonth}</span>
                       </div>
                       <div>
                           <h3>${item.eventTitle} at</h3>
                           <p class="event-host">${item.location}</p>
                           <p class="event-time">${item.startTime} AM - ${item.stopTime} PM</p>
                           <p class="event-price">${item.price == 0 ? 'FREE' : (item.price)*500 +' XAF'}</p>
                       </div>
                   </div>
               </div>
        </a>
               `
        html += itemHtml
    })

    document.querySelector('.events-grid').innerHTML = html
}

function renderTodays(){
    let html =''
    let todaysList= Events.filter((item)=>{
        let itemDate =new Date(item.startDate)
        const formattedDate = date.toISOString().slice(0, 10);
        const shortMonth = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(itemDate);
        if( formattedDate=== item.startDate){
            return item
        }
    } 
)
    todaysList.forEach(item=>{
        let itemDate =new Date(item.startDate)
        const shortMonth = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(itemDate);
        let itemHtml = 
        `
            <a href="./event.html">
             <div class="event-card" onclick="findItem(${item.id})">
                      <img src=${item.image} width = '5%'
                       alt="dev-fest"
                       class="event-img">
                   <span class="event-category tech">${item.categories}</span>
                   <button class="event-fav">&#9734;</button>
                   <div class="event-info">
                       <div class="event-date">
                           <span class="event-month">${itemDate.getDate()}</span>
                           <span class="event-day">${shortMonth}</span>
                       </div>
                       <div>
                           <h3>${item.eventTitle}</h3>
                           <p class="event-host">${item.location}</p>
                           <p class="event-time">${item.start} AM - ${item.Stop} PM</p>
                           <p class="event-price">${item.price == 0 ? 'FREE' : (item.price)*500 +' XAF'}</p>
                       </div>
                   </div>
               </div>
               </a>
        `
        html += itemHtml
    })
    document.querySelector('.todays').innerHTML = todaysList[0]? html : '<p> No Event today</>'
    
}

function renderPage(){
    sorting('eventTitle')
    renderEvents()
    renderTodays()

    // an event renderd on page (any)
let eventClick = document.querySelectorAll(".event-card")
/* ading event listener for clicking on cart */
eventClick.forEach(card=>{
    card.addEventListener('click', ()=>{
        console.log(card)
        Events.forEach(event=>{
            if (event.id === card.dataset.itemId){
                localStorage.setItem('eventData', JSON.stringify(event))
                console.log(eventData)
            }
        })
    })
})
}

//button to initiate a select qurry
let queryButton= document.querySelector('#query')
queryButton.addEventListener('click',()=>{
    renderPage()
})
renderPage()



//testing branch