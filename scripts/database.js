const database = {
    fish: [
        {
            species: "Brown fish",
            name: "Bart",
            food: "Crustaceans",
            length: "3 Feet",
            location: "Over there",
            image: "https://media.cnn.com/api/v1/images/stellar/prod/220309153016-02-rose-veiled-fairy-wrasse-discovery.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
        },
        {
            
            species: "Big fish",
            name: "Jeff",
            food: "Stuffed Crust Pizza",
            length: "5 Inches",
            location: "Pond",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgnjsIrwm_jkkWqELfrJ7ePPnqDVQl5jutXg&usqp=CAU",
        },
        {
            
            species: "Shark",
            name: "Billy",
            food: "People",
            length: "2 Yards",
            location: "France",
            image: "https://img.freepik.com/premium-photo/small-fish-with-black-background-small-fish-middle_925459-10633.jpg",
        },
        {
            
            species: "Spicy Fish",
            name: "Matt",
            food: "Meth",
            length: "1 Foot",
            location: "Your Mom's House",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKEmDv6onkraq3-LZ-AtzpStJQOlITzGZxw&usqp=CAU",
        }
    ],


    locations: [

        {
            id: 1,
            locaitonsName: "France",

        },
        {
            id: 2,
            locaitonsName: "Japan",

        },
        {
            id: 4,
            locaitonsName: "Mexico",

        },
        {
            id: 5,
            locaitonsName: "The Big Pond",

        },
        {
            id: 6,
            locaitonsName: "Not Here But There",

        },
        {
            id: 7,
            locaitonsName: "Over Yonder",

        },
        {
            id: 8,
            locaitonsName: "Your Mom's house",

        },
    ],

    travelTips: [

        {
            id: 1,
            tipQuote: "Don't forget your passport.",

        },
        {
            id: 2,
            tipQuote: "If you wanna buy things make sure to bring money with you.",

        },
        {
            id: 3,
            tipQuote: "It's fucking hot. Don't wear leather!",

        },
        
    ],
    fishCareTips: [
        {

            tankCareTip: "Clean your tank weekly with a light water change. Be sure to do a full water change monthly.",
            waterCareTip: "Make sure the salt levels match your fishes natural environment.",
            tempCareTip: "Your tropical fish should have their water comfortably at 75-80 F.",

        },
       
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))

}
export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}

export const getTravelTips = () => {
    return database.travelTips.map(travelTips => ({...travelTips}))
}

export const getFishCareTips = () => {
    return database.fishCareTips.map(fishCareTips => ({...fishCareTips}))
}