import React,{ useEffect, useRef, useState}from "react"; 
import mapboxgl from "mapbox-gl";

//CHANGE KEY
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2l1bGlvNzgiLCJhIjoiY2tqaGNneGtiOTk1MzJ2cWpyemljZHQzcSJ9.HnFfA7OBcnwbaFJq-vB-5w';
const firstSpot = {
    lng: 5,
    lat: 34,
    zoom: 2
}
export const MapPage = () => {
    const mapDiv = useRef();
    const[mapa, setMap]= useState();
   
    useEffect(()=>{
        const map = new mapboxgl.Map({
        container: mapDiv.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [firstSpot.lng, firstSpot.lat],
        zoom: firstSpot.zoom
});
    setMap(map);
    },[]);
    return (
        <>
        <div
          ref= {mapDiv}
          className="mapContainer"
        />
            
        </>
    )

}
export default MapPage; 