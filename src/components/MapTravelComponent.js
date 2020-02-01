import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Polyline
} from "react-google-maps";
import { getPoints } from '../services/Polilyne';

class Map extends React.Component {

   constructor (props) {
        super(props)
    
        this.state = {
            points: [],
            isFetch: true,
        }
    }
   
    async componentDidMount() {
        const responsePoints =  await getPoints(19, '2019-12-23')
        console.log("HI")
        console.log(responsePoints)
        console.log("BYE")
        this.setState({ points: responsePoints.routes, isFetch: false })
    }

  render = () => {
    const { isFetch, points} = this.state
    if (isFetch){
        return 'Loading...'
    }
    
    console.log("Hola")
    console.log(points)
    console.log("Adios")
    return (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 23.2334831, lng: -106.395287 }}
      >
        <Polyline path={points} options={{ strokeColor: "#FF0000 " }} />
      </GoogleMap>
    );
  };
}

const MapComponent = withScriptjs(withGoogleMap(Map));

/*export default () => (
  <MapComponent
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `600px`, width: "800px" }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);*/

export default Map
