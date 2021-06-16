import { requestsHTML } from "./Requests.js"
import { ServiceForm} from "./ServiceForm.js"

export const SinkRepair = () => {
    return `
    <h1>Maude and Merle's Sink Repair</h1>
    <section class="serviceForm">
    </section>
        ${ServiceForm()}
    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${requestsHTML()}
    </section>
    `
}

