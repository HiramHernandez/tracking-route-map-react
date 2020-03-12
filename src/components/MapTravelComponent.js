import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Polyline,
  Marker
} from "react-google-maps";
import { getPoints } from "../services/Polilyne";
import { getMarkersClients } from "../services/MarkersClients";
import { generateIcon } from "../helpers/CustomIcon";
import { LoadingSpinner } from "./LoadingSpinner";

//lo viejo
class Map extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      points: [],
      isFetch: true,
      markersClients: []
    }
  }

  async componentDidMount() {
    const responsePoints = await getPoints(19, '2019-12-23', 1)
    const responseMarkers = await getMarkersClients(19, '2019-12-23', 1)
    this.setState({ points: responsePoints.routes, isFetch: false, markersClients: responseMarkers.markers })
  }


  render = () => {
    const { isFetch, points, markersClients } = this.state
    if (isFetch) {
      return 'Loading...'
    }
    //  "https://lh3.googleusercontent.com/bECXZ2YW3j0yIEBVo92ECVqlnlbX9ldYNGrCe0Kr4VGPq-vJ9Xncwvl16uvosukVXPfV=w300",
    //"/public/images/iconos/Lunes/Lunes_(10).png",
    let iconMarker = new window.google.maps.MarkerImage(
      "D:\PROJECTSGIT\js\tracking-route-map-react\public\images\iconos\Lunes\lunes_(1)",
      null, /* size is determined at runtime */
      null, /* origin is 0,0 */
      null, /* anchor is bottom center of the scaled image */
      new window.google.maps.Size(32, 32)
    );
    return (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 23.2334831, lng: -106.395287 }}
        mapContainerStyle={{
          height: "100vh",
          width: "100%"
        }}
      >
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
        <Polyline path={points} options={{ strokeColor: "#FF0000 " }} />
        {
          markersClients.map(marker => (
            <Marker
              position={{ lat: marker.lat, lng: marker.lng }}
              key={marker.id}
              icon={iconMarker}
              title={marker.establecimiento}
              color="blue"
            />))
        }
      </GoogleMap>
    );
  };
}

const MapComponent = withScriptjs(withGoogleMap(Map));

export default () => (
  <MapComponent
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,placese&key=AIzaSyBIXzrlpcdkcxRkaQ5gxNIhQ42DbpejnTE"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `600px`, width: "800px" }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);
