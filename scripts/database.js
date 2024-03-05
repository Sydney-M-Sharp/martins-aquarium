const database = {
    fish: [
    
            {
                species: "Brown fish",
                name: "Bart",
                food: "Crustaceans",
                length: "3 Feet",
                lengthNumber: 3,
                location: "Over there",
                image: "https://media.cnn.com/api/v1/images/stellar/prod/220309153016-02-rose-veiled-fairy-wrasse-discovery.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
            },
            {
                species: "Big fish",
                name: "Jeff",
                food: "Stuffed Crust Pizza",
                length: "5 Inches",
                lengthNumber: 5,
                location: "Pond",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgnjsIrwm_jkkWqELfrJ7ePPnqDVQl5jutXg&usqp=CAU",
            },
            {
                species: "Shark",
                name: "Billy",
                food: "People",
                length: "2 Yards",
                lengthNumber: 2,
                location: "France",
                image: "https://img.freepik.com/premium-photo/small-fish-with-black-background-small-fish-middle_925459-10633.jpg",
            },
            {
                species: "Spicy Fish",
                name: "Matt",
                food: "Meth",
                length: "1 Foot",
                lengthNumber: 1,
                location: "Your Mom's House",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKEmDv6onkraq3-LZ-AtzpStJQOlITzGZxw&usqp=CAU",
            },
            {
                species: "Salmon",
                name: "Atlantic Salmon",
                food: "Small fish, shrimp, and insects",
                length: "1.5 meters",
                lengthNumber: 1.5,
                location: "Atlantic Ocean",
                image: "https://media.istockphoto.com/id/697863124/video/siamese-fighting-fish-betta-splendens.jpg?s=640x640&k=20&c=F3XSUycHwXsyDUq6B4AyrE30wkwLZulLQc_bb_4_5Ao="
            },
           
        
            {
                species: "Trout",
                name: "Rainbow Trout",
                food: "Insects, crustaceans, and small fish",
                length: "60 centimeters",
                lengthNumber: 60,
                location: "Freshwater streams",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXTIpSIZPgoYC3dsMyK1o8SRw4uDHoeH1FZA&usqp=CAU"
            },
            {
                species: "Tuna",
                name: "Yellowfin Tuna",
                food: "Small fish, squid, and crustaceans",
                length: "2.4 meters",
                lengthNumber: 240,
                location: "Pacific Ocean",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_x4sj9K61bH5ELeoqMH48yppqvh_UAt_GQ&usqp=CAU"
            },
            {
                species: "Bass",
                name: "Largemouth Bass",
                food: "Fish, crayfish, and insects",
                length: "60 centimeters",
                lengthNumber: 60,
                location: "North America",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtaZTqFNz_yIIp6GUeaLz1JWJZ862aNcHZXg&usqp=CAU"
            },
            {
                species: "Swordfish",
                name: "Broadbill Swordfish",
                food: "Fish, squid, and crustaceans",
                length: "3 meters",
                lengthNumber: 300,
                location: "Tropical and temperate oceans",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5DbhbUHOH-i0wmttd48ZuvSEXU-8DKdDgUg&usqp=CAU"
            },
            {
                species: "Cod",
                name: "Atlantic Cod",
                food: "Shrimp, crabs, and mollusks",
                length: "1.2 meters",
                lengthNumber: 120,
                location: "North Atlantic Ocean",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZFNUdxoT32peOh3xba0_2Q_sufaezUssC3BCNxjaq00JH0yE_ecjse8pJUQWNA7qH5s&usqp=CAU"
            },
            {
                species: "Mackerel",
                name: "Atlantic Mackerel",
                food: "Small fish, squid, and plankton",
                length: "40 centimeters",
                lengthNumber: 40,
                location: "Atlantic Ocean",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Bz9FVleGVItsQE3mqw2-avX64o4U8tjxXtiociHsVJfHgVQbcGJLmX6enKvCe9HA6Uk&usqp=CAU"
            },
            {
                species: "Halibut",
                name: "Atlantic Halibut",
                food: "Fish, squid, and crustaceans",
                length: "2.5 meters",
                lengthNumber: 250,
                location: "North Atlantic Ocean",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_rU6ViMVtJs2x2XBb6OSyIwVfEA1NRJXeQ&usqp=CAU"
            },
            {
                species: "Perch",
                name: "Yellow Perch",
                food: "Small fish, insects, and crustaceans",
                length: "30 centimeters",
                lengthNumber: 30,
                location: "Freshwater lakes",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhTLxRvDJuodfAatbvBnOYx-ElNbdYoPqIw&usqp=CAU"
            },
            {
                species: "Salmon",
                name: "Chinook Salmon",
                food: "Small fish, shrimp, and insects",
                length: "1.8 meters",
                lengthNumber: 180,
                location: "Pacific Ocean",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHsmgbiZS9gPqYNHr4x_kqIHgfrBozxVKoQ&usqp=CAU"
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
        {
            id: 9,
            locaitonsName: "Canada",

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