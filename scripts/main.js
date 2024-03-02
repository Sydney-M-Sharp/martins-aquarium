import { getFish, getFishCareTips, getLocations, getTravelTips } from './database.js'
import { FishList } from './fish/FishList.js'
import { FishCare } from './fish/FishCare.js'
import { LocationsList } from './locations/LocationsList.js'
import { TravelTips } from './locations/TravelTips.js'

const parentHTMLElement = document.querySelector('.AllFish') // look for '.AllFish' then place FishList inside.
parentHTMLElement.innerHTML = FishList() // the act of placing FishList

// adding locations.
const parentHTMLElement2 = document.querySelector('.AllLocations')
parentHTMLElement2.innerHTML = LocationsList()

// adding Trip tips
const parentHTMLElement3 = document.querySelector('.AllTips')
parentHTMLElement3.innerHTML = TravelTips()

// adding Fish Care tips
const parentHTMLElement4 = document.querySelector('.AllFishCare')
parentHTMLElement4.innerHTML = FishCare()
