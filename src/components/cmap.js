import React, {Component , setState} from 'react';
import ReactMapGL ,{Marker} from 'react-map-gl';
 import 'mapbox-gl/dist/mapbox-gl.css';
 var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
 
 class Cmap extends Component {
  constructor(props) {
    super(props);
    this.state = {
    viewport: {
      width:'100%',
      height:'400px',
      latitude: 31.7754,
      longitude:  76.9861,
      zoom: 15,
      
    }
  }

  };
 
  render() {
   
    return (
      <ReactMapGL
        {...this.state.viewport}
        
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken = {'pk.eyJ1IjoidmlpaWlpc2giLCJhIjoiY2s4YXE4NmYyMDRxaTNkbzNhbHV4ajk3aiJ9.TvnXm-qD00gP62DCRwg4EA'}
        mapStyle={'mapbox://styles/mapbox/dark-v10'}
        >
        <Marker 
              anchor = "bottom"
              latitude={31.7754}
              longitude={31.7754}>
              <img className="map-icon" src="https://img.icons8.com/color/72/marker.png"></img> 
              <div>iit mandi</div></Marker>
        </ReactMapGL>
     
    );
  }
}
export default Cmap;