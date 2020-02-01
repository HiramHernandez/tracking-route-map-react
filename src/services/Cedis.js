const baseUrl = 'http://127.0.0.1:5000/api'

export async function getCedis () {
    const response = await fetch(`${baseUrl}/list-cedis/`)
    const responseJson = await response.json()
    return responseJson
}

export default {
    getCedis
}
