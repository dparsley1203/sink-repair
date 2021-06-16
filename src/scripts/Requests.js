import { getRequests } from "./dataAccess.js"

export const requestsHTML = () => {
    const requests = getRequests() // grab the local state of the requests data
    const requestMenu = (request) => 
    `<li>
        ${request.description}
        <button class="request__delete"
                id="request--${request.id}"> Delete
        </button>
    </li>`

    let html = `
        <ul>
            ${
                requests.map(requestMenu).join("")
            }
        </ul>
    `

    return html
        
}