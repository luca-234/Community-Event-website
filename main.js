/* data collection */
let Events = JSON.parse(localStorage.getItem('events')) || []
let sorted = []
let filtered = []
let item
/*discardable function used for adding random items for testing remember to remove object structure before discarding */
function testingEvents(){
    item = undefined;
    ['wedding', 'orientation', 'talk', 'empowerment'].forEach((element)=>{
        let name = 'name'
        let date = 'today'
        let start= '2:00'
        let Stop= '6:00'
        let description= "long string for description"
        let location= 'bamenda 1'
        let categories= [element, 'consert', 'music']
        let keyword= ['sing', 'dance','entertainment']
        let image= './sample.jpg'
        let attendance= 0
        let price= 0
        let status = 'Upcomming'
    
        item = {
            name,
            date ,
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
        localStorage.setItem('events', JSON.stringify(Events))
    }
}
testingEvents()

/*sorting function property to sort  by is passed */
function sorting(property){
    sorted = Events.slice().sort((a, b) => (a[property]).localeCompare(b[property]));
}
sorting('name')

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
        if ((item.categories).includes(search)){
            return true
        }
        
        else return false
    })
    filtered = (keyWord.concat(findLocation)).concat(categories)
    console.log(filtered)
}
filtering('empowerment', 'education')

/* function that desides wich list gets redered */

let renderList = ()=>{

}



/*card html

*/