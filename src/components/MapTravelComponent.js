import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Polyline,
  Marker
} from "react-google-maps";
import { getPoints } from '../services/Polilyne';
import { getMarkersClients } from '../services/MarkersClients'

//lo viejo
class Map extends React.Component {

   constructor (props) {
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
    if (isFetch){
        return 'Loading...'
    }
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
        {markersClients.map(marker => (
        <Marker
          position={{ lat: marker.lat, lng: marker.lng }}
          key={marker.id}
          title = { marker.establecimiento }
        />))}
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
