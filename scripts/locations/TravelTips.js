import {getTravelTips} from '../database.js'

export const TravelTips = () => {
    const tips = getTravelTips()
    let htmlString = '<article class="TravelTips">'
    for (const tip of tips) {
        htmlString += `<section class="tips__card">
            
        <div class="tips__quotes"> - ${tip.tipQuote} - </div>
       
    </section>
`
}
htmlString += `</article>`

return htmlString
}