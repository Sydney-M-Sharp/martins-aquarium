import { getFish, getLocations } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

// Import the FishList function from the correct module
import {FishList} from './fish/FishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector('.AllFish') // look for '.AllFish' then place FishList inside.


parentHTMLElement.innerHTML = FishList() // the act of placing FishList 

// adding locations. 

const AllLocations = getLocations()

for (const location of AllLocations) {
    console.log(location)
}

import {LocationsList} from './locations/LocationsList.js'


const parentHTMLElement2 = document.querySelector('.AllLocations') 
parentHTMLElement2.innerHTML = LocationsList()