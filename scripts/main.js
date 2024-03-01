import { getFish, getFishCareTips, getLocations, getTravelTips } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

import {FishList} from './fish/FishList.js'

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

//adding Trip tips
const AllTips = getTravelTips()
for (const tip of AllTips) {
    console.log(tip)
}
import {TravelTips} from './locations/TravelTips.js'
const parentHTMLElement3 = document.querySelector('.AllTips') 
parentHTMLElement3.innerHTML = TravelTips()



//adding Fish Care tips
const AllFishCare = getFishCareTips()
for (const tip of AllFishCare) {
    console.log(tip)
}
import {FishCare} from './fish/FishCare.js'
const parentHTMLElement4 = document.querySelector('.AllFishCare') 
parentHTMLElement4.innerHTML = FishCare()