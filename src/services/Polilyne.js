const baseUrl = 'https://api.imgflip.com'

export async function getPoints () {
    //const response = await fetch(`${baseUrl}/get_memes`)
    //const responseJson = await response.json()
    const path = [
        { lat: 18.558908, lng: -68.389916 },
        { lat: 18.558853, lng: -68.389922 },
        { lat: 18.558375, lng: -68.389729 },
        { lat: 18.558032, lng: -68.389182 },
        { lat: 18.55805, lng: -68.388613 },
        { lat: 18.558256, lng: -68.388213 },
        { lat: 18.558744, lng: -68.387929 }
      ];
    return path
}

export default {
    getPoints
}