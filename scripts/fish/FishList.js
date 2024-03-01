import {getFish} from '../database.js'

export const FishList = () => {
    
    const fishes = getFish()
    let htmlString = '<article class="FishList">'

    for (const fish of fishes) {

        htmlString += `<section class="fish__card">
            <div><img  class="fish__image" src="${fish.image}">  </img></div>
            <section class="fish__info">
            <div class="fish__name"><h2>Fish Name: ${fish.name}<h2></div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length"> Length: ${fish.length}</div>
            <div class="fish__location"> Location Found: ${fish.location}</div>
            <div class="fish__diet">Fish Food: ${fish.food}</div>
            </section>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}