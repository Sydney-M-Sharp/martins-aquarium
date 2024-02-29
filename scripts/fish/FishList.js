// Import the function that returns a copy of the fish array
import {getFish} from '../database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="FishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish__card">
            <div><img  class="fish__image" src="${fish.image}">  </img></div>
            <div class="fish__name"><h1>Fish Name: ${fish.name}<h1></div>
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