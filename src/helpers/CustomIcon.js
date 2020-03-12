export function generateIcon(orderVisit) {
    console.log(orderVisit);
    //let nameIcon = 'https://lh3.googleusercontent.com/bECXZ2YW3j0yIEBVo92ECVqlnlbX9ldYNGrCe0Kr4VGPq-vJ9Xncwvl16uvosukVXPfV=w300';
    let nameIcon = `/public/images/iconos/Lunes/Lunes_(${orderVisit}).png`;
    const iconMarker = new window.google.maps.MarkerImage(
        nameIcon,
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new window.google.maps.Size(32, 32)
    );
    return iconMarker;
}

export default {
    generateIcon
}
