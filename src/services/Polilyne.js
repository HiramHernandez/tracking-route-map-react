const baseUrl = 'http://localhost:5000/api'

export async function getPoints (id_road, date, id_cedis) {
    //const response = await fetch(`${baseUrl}/get_travel/${id_road}/${date}/1/`)
    const response = await fetch(`${baseUrl}/get_travel/${id_road}/${date}/${id_cedis}/`)
    const responseJson = await response.json()
    return responseJson
}

export default {
    getPoints
}