import {getFish} from '../database.js'

export const FishList = () => {
    
    const fishes = getFish()
    let htmlString = '<article class="FishList">'

    for (const fish of fishes) {

        htmlString += `<section class="fish__card">
            <div><img  class="fish__image" src="${fish.image}">  </img></div>
            
            <div class="fish__name"><strong>Fish Name: ${fish.name}</strong></div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length"> Length: ${fish.length}</div>
            <div class="fish__location"> Location Found: ${fish.location}</div>
            <div class="fish__diet">Fish Food: ${fish.food}</div>
            
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}