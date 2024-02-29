// Import the function that returns a copy of the locations array
import {getLocations} from '../database.js'

export const LocationsList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="LocationsList">'

    // Create HTNL representations of each fish here
    for (const location of locations) {

        htmlString += `<section class="locations__card">
            
            <div class="fish__locations"> Locations visited: ${location.locaitonsName}</div>
           
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}