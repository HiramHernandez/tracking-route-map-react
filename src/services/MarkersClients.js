const baseUrl = 'http://localhost:5000/api'

export async function getMarkersClients (id_road, date, id_cedis) {
    const response = await fetch(`${baseUrl}/markers/${id_road}/${date}/${id_cedis}`)
    const responseJson = await response.json()
    return responseJson
}

export default {
    getMarkersClients
}
