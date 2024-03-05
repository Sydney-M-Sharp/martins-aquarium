import { getFish } from '../database.js'

export const FishList = (listOfFishes) => {

    let htmlString = '<article class="FishList">'

    for (const fish of listOfFishes) {

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


export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const fishes = getFish()
    let holyFish = []

    for (const fish of fishes) {
        if (fish.lengthNumber % 3 === 0) {
            holyFish.push(fish)
        }
    }
    return holyFish
}



export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const fishes = getFish()
    let soldiers = []

    for (const fish of fishes) {
        if (fish.lengthNumber % 5 === 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const fishes = getFish()
    let regularFish = []

    for (const fish of fishes) {
        if (fish.lengthNumber % 3 != 0 && fish.lengthNumber % 5 != 0) {
            regularFish.push(fish)
        }
    }
    return regularFish
}