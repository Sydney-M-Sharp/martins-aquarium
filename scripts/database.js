/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
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
            image: "https://cdn.britannica.com/14/162014-050-45C1FD13/warm-bloodedness-opah-results-heat-exchange-system-gills.jpg",
        },
        {
            
            species: "Shark",
            name: "Billy",
            food: "People",
            length: "2 Yards",
            location: "France",
            image: "https://cdn.britannica.com/14/162014-050-45C1FD13/warm-bloodedness-opah-results-heat-exchange-system-gills.jpg",
        },
        {
            
            species: "Spicy Fish",
            name: "Matt",
            food: "Meth",
            length: "1 Foot",
            location: "Your Mom's House",
            image: "https://cdn.britannica.com/14/162014-050-45C1FD13/warm-bloodedness-opah-results-heat-exchange-system-gills.jpg",
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
            id: 3,
            locaitonsName: "Mexico",

        },
    ],

    travelTips: [

        {
            id: 1,
            locaitonsName: "talk with your hands",

        },
        {
            id: 2,
            locaitonsName: "frogs are there",

        },
        {
            id: 3,
            locaitonsName: "she will make you cookies",

        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))

}
export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}