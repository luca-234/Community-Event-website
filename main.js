/* data collection */
let Events = JSON.parse(localStorage.getItem('events')) || []
let sorted = []
let filtered = []
let item
//gets date of today
let date = new Date;
/* variable to decide weather there is a query for a filter or not then determine
weather to render filtered list or Events list*/
let isQueried = false
//gets the form wich will act ass event 
let formSubmit = document.querySelector('form')


function getData(){
    
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        let eventTitle = document.getElementById('event-title')
        let categories = document.getElementById('event-category')
        let session = document.getElementById('event-session')
        let startDate = document.getElementById('start-date')
        let startTime = document.getElementById('start-time')
        let stopTime = document.getElementById('end-time')
        let location = document.getElementById('event-location')
        let description = document.getElementById('event-description')
        let image = document.getElementById('event-image')
        

        item = {
            eventTitle,
            startDate,
            startTime,
            stopTime,
            description,
            location,
            categories,
            keyword,
            image,
            session,
            attendance,
            price,
            status: 'upcomming',
            id : eventTitle + date
        }
        addToEvents(item)
    })
}

/*discardable function used for adding random items for testing remember to remove object structure before discarding */
function testingEvents(){
    Events = []
    item = undefined;
    ['wedding', 'orientation', 'talk', 'empowerment'].forEach((element)=>{
        let eventTitle = 'name'
        let start= '2:00'
        let Stop= '6:00'
        let description= "long string for description"
        let location= 'bamenda 2'
        let categories= [element, 'consert', 'music']
        let keyword= ['sing', 'dance','entertainment']
        let image= './sample.jpg'
        let attendance= 0
        let price= 0
        let status = 'Upcomming'
    
        item = {
            eventTitle,
            date,
            start,
            Stop,
            description,
            location,
            categories,
            keyword,
            image,
            attendance,
            price,
            status,
            id : name + date
        }
        addToEvents(item)
    })
}

let addToEvents = (item)=> {
    if(item){
        Events.push(item)
        //remember to remove events = []
        localStorage.setItem('events', JSON.stringify(Events))
    }
}
testingEvents()

/*sorting function property to sort  by is passed */
function sorting(property){
    sorted = Events.slice().sort((a, b) => (a[property]).localeCompare(b[property]));
}
sorting('eventTitle')

/*filtering categories, location and search keyWord */

function filtering(category = '', location = '', search =''){
    let categories = []
    let findLocation = []
    let keyWord = []

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
        if ((item.categories).includes(search) || item.eventTitle === search){
            return true
        }
        
        else return false
    })
    filtered = (keyWord.concat(findLocation)).concat(categories)
    console.log(filtered)
}
filtering()

/* function that desides wich list gets redered */

function List(){
    return isQueried ? filtered : sorted
}

/*function that renders events in the event section */
function renderEvents(){
    let html = ''
    List().forEach(item=>{
        let itemHtml = 
        `
             <div class="event-card">
                      <img src=${item.image} width = '5%'
                       alt="dev-fest"
                       class="event-img">
                   <span class="event-category tech">Tech</span>
                   <button class="event-fav">&#9734;</button>
                   <div class="event-info">
                       <div class="event-date">
                           <span class="event-month">${(item.date).getMonth()}</span>
                           <span class="event-day">${(item.date).getDay()}</span>
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

    document.querySelector('.events-container').innerHTML = `<h1>events</h1> `
}

renderEvents()

function renderTodays(){
    let html =''
    let todaysList= Events.filter((item)=> (item.date).getDay() == date.getDay() )
    todaysList.forEach(item=>{
        let itemHtml = 
        `
             <div class="event-card">
                      <img src=${item.image} width = '5%'
                       alt="dev-fest"
                       class="event-img">
                   <span class="event-category tech">Tech</span>
                   <button class="event-fav">&#9734;</button>
                   <div class="event-info">
                       <div class="event-date">
                           <span class="event-month">${(item.date).getMonth()}</span>
                           <span class="event-day">${(item.date).getDay()}</span>
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
    document.querySelector('.todays-container').innerHTML = `<h1>todays Events</h1> ${html}`
    
}

renderTodays()

//testing branch