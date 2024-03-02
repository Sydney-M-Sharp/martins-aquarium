import {getFishCareTips} from '../database.js'

export const FishCare = () => {
    const tips = getFishCareTips()
    let htmlString = '<article class="FishCareTips">'
    for (const tip of tips) {
        htmlString += `<section class="FishCareTips__card">
            
        <div class="FishCareTips__quotes"> <strong> Fish Tank Tip:</strong> ${tip.tankCareTip}</div>
        <div class="FishCareTips__quotes"> <strong>Fish Tank Water Tip:</strong> ${tip.waterCareTip}</div>
        <div class="FishCareTips__quotes"> <strong>Fish Water Temperature Tip:</strong> ${tip.tempCareTip}</div>
       
    </section>
`
}
htmlString += `</article>`

return htmlString
}