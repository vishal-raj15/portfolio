import React, {Component , setState , useState} from 'react';
import ReactMapGL ,{Marker} from 'react-map-gl';

 import mp from './map.png';


//  latitude: 31.7754,
//       longitude:  76.9861,
 
 export default function Newmap() {
    
    const [Viewport, setViewport] = useState({
         latitude: 31.7754,
      longitude:  76.9861,
      width:'100vw',
      height: '60vh',
      zoom: 10

    });


    return (
          
          <ReactMapGL 
            
            mapboxApiAccessToken={'pk.eyJ1IjoidmlpaWlpc2giLCJhIjoiY2s4YXE4NmYyMDRxaTNkbzNhbHV4ajk3aiJ9.TvnXm-qD00gP62DCRwg4EA'}
            mapStyle="mapbox://styles/viiiiish/cknvvkgqx1bqd17qvli6kbk27"
            {...Viewport}
            onViewportChange={(newView) => setViewport(newView)}
            
          > 

            <Marker 

            key={Viewport.latitude}
            latitude={31.7754}
            longitude={76.9861}>

            <img className="map-icon" 
              src={mp} 
              width={ Viewport.zoom*2}
              height={ Viewport.zoom * 3}
              ></img> 
           
           <div>IIT Mandi</div>
            

            </Marker>

          
          </ReactMapGL>
     
    );

  }