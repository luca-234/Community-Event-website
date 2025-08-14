/* data collection */
let Events = JSON.parse(localStorage.getItem('events')) || [
    
    {
        eventTitle: "Photography Workshop",
        startDate: "2025-09-12",
        startTime: "09:00",
        stopTime: "13:00",
        description: "Learn photography techniques from professionals.",
        location: "City Art Center",
        categories: ["Art", "Education"],
        keyword: ["photography", "learning"],
        image: "photo-workshop.jpg",
        session: "Morning",
        attendance: 0,
        price: 30,
        status: "upcoming",
        id: "Photography_Workshop_2025-09-12"
    },
    {
        eventTitle: "Book Fair",
        startDate: "2025-11-20",
        startTime: "10:00",
        stopTime: "18:00",
        description: "A gathering of book lovers and publishers.",
        location: "Convention Center",
        categories: ["Education", "Literature"],
        keyword: ["books", "reading"],
        image: "book-fair.jpg",
        session: "Full Day",
        attendance: 0,
        price: 5,
        status: "upcoming",
        id: "Book_Fair_2025-11-20"
    },
    {
        eventTitle: "Film Premiere Night",
        startDate: "2025-08-28",
        startTime: "20:00",
        stopTime: "23:30",
        description: "Exclusive premiere of a new blockbuster movie.",
        location: "CineMax Theatre",
        categories: ["Entertainment", "Film"],
        keyword: ["movies", "cinema"],
        image: "film-premiere.jpg",
        session: "Evening",
        attendance: 0,
        price: 12,
        status: "upcoming",
        id: "Film_Premiere_Night_2025-08-28"
    },
    {
        eventTitle: "Yoga & Wellness Retreat",
        startDate: "2025-09-18",
        startTime: "08:00",
        stopTime: "16:00",
        description: "A relaxing retreat focused on yoga and mindfulness.",
        location: "Mountain Resort",
        categories: ["Health", "Wellness"],
        keyword: ["yoga", "meditation"],
        image: "yoga-retreat.jpg",
        session: "Full Day",
        attendance: 0,
        price: 40,
        status: "upcoming",
        id: "Yoga_&_Wellness_Retreat_2025-09-18"
    },
    {
        eventTitle: "Coding Bootcamp",
        startDate: "2025-10-05",
        startTime: "09:00",
        stopTime: "17:00",
        description: "Intensive coding workshop for beginners.",
        location: "Tech Academy",
        categories: ["Technology", "Education"],
        keyword: ["coding", "programming"],
        image: "coding-bootcamp.jpg",
        session: "Full Day",
        attendance: 0,
        price: 60,
        status: "upcoming",
        id: "Coding_Bootcamp_2025-10-05"
    },
    {
        eventTitle: "Science Expo",
        startDate: "2025-11-02",
        startTime: "10:00",
        stopTime: "17:00",
        description: "An exhibition of scientific innovations and projects.",
        location: "Science Museum",
        categories: ["Education", "Science"],
        keyword: ["science", "innovation"],
        image: "science-expo.jpg",
        session: "Full Day",
        attendance: 0,
        price: 0,
        status: "upcoming",
        id: "Science_Expo_2025-11-02"
    },
    {
        eventTitle: "Local Farmers Market",
        startDate: "2025-08-22",
        startTime: "07:00",
        stopTime: "14:00",
        description: "Fresh produce from local farmers and artisans.",
        location: "Town Square",
        categories: ["Food", "Community"],
        keyword: ["market", "local"],
        image: "farmers-market.jpg",
        session: "Morning",
        attendance: 0,
        price: 0,
        status: "upcoming",
        id: "Local_Farmers_Market_2025-08-22"
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

let selectEvent = {}

function findItem(id){
   let found = 0
   Events.forEach(item =>{
        if (item.id === id){
            found = item
            return item
        }
    })
    console.log(found)
    return found
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
    let image = document.getElementById('event-image').value
    

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
        status: 'upcomming',
        id : eventTitle + date
    }

    addToEvents(item)
    // form.addEventListener('submit', (e)=>{
    //     e.preventDefault()
    // })
}

/*discardable function used for adding random items for testing remember to remove object structure before discarding */
// function testingEvents(){
//     item = undefined;
//     ['wedding', 'orientation', 'talk', 'empowerment'].forEach((_)=>{

//         item = {
//         eventTitle: "Local Farmers Market",
//         startDate: "2025-08-22",
//         startTime: "07:00",
//         stopTime: "14:00",
//         description: "Fresh produce from local farmers and artisans.",
//         location: "Town Square",
//         categories: ["Food", "Community"],
//         keyword: ["market", "local"],
//         image: "farmers-market.jpg",
//         session: "Morning",
//         attendance: 0,
//         price: 0,
//         status: "upcoming",
//         id: "Local_Farmers_Market_2025-08-22"
//         }
//         addToEvents(item)
//     })
// }


// testingEvents()
/*sorting function property to sort  by is passed */
function sorting(property){
    sorted = Events.slice().sort((a, b) => (a[property]).localeCompare(b[property]));
}
sorting('eventTitle')

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
        const longMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(itemDate);
        let itemHtml = 
        `
             <div class="event-card" data-item-id=${item.id}>
                      <img src='./sample.jpg' width = '5%'
                       
                       class="event-img">
                   <span class="event-category tech">Tech</span>
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
        `
        html += itemHtml
    })

    document.querySelector('.events-grid').innerHTML = html
}

function renderTodays(){
    let html =''
    let todaysList= Events.filter((item)=>{
        let itemDate =new Date(item.startDate)
        const formattedDate = itemDate.toISOString().slice(0, 10);
        const shortMonth = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(itemDate);
        return (/*(itemDate.getDay())*/'2025-12-12' === formattedDate )
    } 
)
    todaysList.forEach(item=>{
        let itemDate =new Date(item.startDate)
        const shortMonth = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(itemDate);
        let itemHtml = 
        `
             <div class="event-card" onclick="findItem(${item.id})">
                      <img src='./sample.jpg' width = '5%'
                       alt="dev-fest"
                       class="event-img">
                   <span class="event-category tech">Tech</span>
                   <button class="event-fav">&#9734;</button>
                   <div class="event-info">
                       <div class="event-date">
                           <span class="event-month">${itemDate.getDate()}</span>
                           <span class="event-day">${shortMonth}</span>
                       </div>
                       <div>
                           <h3>Google Dev-Fest at ${item.location}</h3>
                           <p class="event-host">Bambili Mile 7</p>
                           <p class="event-time">${item.start} AM - ${item.Stop} PM</p>
                           <p class="event-price">${item.price = 0 ? 'FREE' : item.price}</p>
                       </div>
                   </div>
               </div>
        `
        html += itemHtml
    })
    document.querySelector('.todays').innerHTML = html + '<hr>'
    
}

function renderPage(){
    renderEvents()
    renderTodays()
}

//button to initiate a select qurry
let queryButton= document.querySelector('#query')
queryButton.addEventListener('click',()=>{
    renderPage()
})
renderPage()

// an event renderd on page (any)
let eventClick = document.querySelectorAll(".event-card")
let eventData = JSON.parse(localStorage.getItem('eventData')) || {}

eventClick.forEach(card=>{
    card.addEventListener('click', ()=>{
        Events.forEach(event=>{
            if (event.id === card.dataset.itemId){
                localStorage.setItem('eventData', JSON.stringify(event))
                console.log(eventData)
            }
        })
    })
})

//testing branch