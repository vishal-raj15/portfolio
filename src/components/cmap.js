import React, {Component , setState} from 'react';
import ReactMapGL from 'react-map-gl';
 import 'mapbox-gl/dist/mapbox-gl.css';
 var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 class Cmap extends Component {
    
  state = {
    viewport: {
      width:600,
      height: 300,
      latitude: 31.7754,
      longitude:  76.9861,
      zoom: 15,
      
    }

  };
 
  render() {
   
    return (
      <div className="map-img" >
      <ReactMapGL
        {...this.state.viewport}
        
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken = {'pk.eyJ1IjoidmlpaWlpc2giLCJhIjoiY2s4YXE4NmYyMDRxaTNkbzNhbHV4ajk3aiJ9.TvnXm-qD00gP62DCRwg4EA'}
        mapStyle={'mapbox://styles/mapbox/dark-v10'}

        
      />
      </div>
    );
  }
}
export default Cmap;