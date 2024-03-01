import {getFishCareTips} from '../database.js'

export const FishCare = () => {
    const tips = getFishCareTips()
    let htmlString = '<article class="FishCareTips">'
    for (const tip of tips) {
        htmlString += `<section class="FishCareTips__card">
            
        <div class="FishCareTips__quotes"> Fish Tank Tip: ${tip.tankCareTip}</div>
        <div class="FishCareTips__quotes"> Fish Tank Water Tip: ${tip.waterCareTip}</div>
        <div class="FishCareTips__quotes"> Fish Water Temperature Tip: ${tip.tempCareTip}</div>
       
    </section>
`
}
htmlString += `</article>`

return htmlString
}