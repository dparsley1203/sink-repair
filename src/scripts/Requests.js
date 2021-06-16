import { getRequests } from "./dataAccess.js"

export const requestsHTML = () => {
    const requests = getRequests() // grab the local state of the requests data
    const requestMenu = (requests) => `<li>${requests.description}</li>`

    let html = `
        <ul>
            ${
                requests.map(requestMenu)
            }
        </ul>
    `

    return html
}