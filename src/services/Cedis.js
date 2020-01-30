const baseUrl = 'https://api.imgflip.com'

export async function getCedis () {
    const response = await fetch(`${baseUrl}/get_memes`)
    const responseJson = await response.json()
    return responseJson
}

export default {
    getCedis
}