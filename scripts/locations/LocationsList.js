
import {getLocations} from '../database.js'

export const LocationsList = () => {
    
    const locations = getLocations()

    let htmlString = '<article class="LocationsList">'


    for (const location of locations) {

        htmlString += `<section class="locations__card">
    
            <div class="fish__locations"> - ${location.locaitonsName} - </div>
           
        </section>
`
    }

    htmlString += `</article>`

    return htmlString
}