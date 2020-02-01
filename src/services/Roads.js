const baseUrl = 'http://127.0.0.1:5000/api'

export async function getRoads () {
    const response = await fetch(`${baseUrl}/list-roads/`)
    const responseJson = await response.json()
    return responseJson
}

export default {
    getRoads
}
