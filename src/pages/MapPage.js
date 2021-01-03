import React,{ useEffect, useRef, useState}from "react"; 
import mapboxgl from "mapbox-gl";

//CHANGE KEY
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2l1bGlvNzgiLCJhIjoiY2tqaGNneGtiOTk1MzJ2cWpyemljZHQzcSJ9.HnFfA7OBcnwbaFJq-vB-5w';
const firstSpot = {
    lng: 144.8794,
    lat: -37.8020,
    zoom: 11.52
}
export const MapPage = () => {
    const mapDiv = useRef();
    const[mapa, setMap]= useState();
     const[coords, setCoords]= useState(firstSpot);
   
    useEffect(()=>{
        const map = new mapboxgl.Map({
        container: mapDiv.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [firstSpot.lng, firstSpot.lat],
        zoom: firstSpot.zoom
});
    setMap(map);
    },[]);

//MOVING MAPA
    useEffect (()=>{
        mapa?.on("move",()=>{
            console.log("hey");
            const{lng, lat} = mapa.getCenter();
            console.log(lng.lat);
            setCoords({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom:mapa.getZoom().toFixed(2)
            })
        });

    },[mapa]);
    return (
        <>
        <div className = "info">
            lng:{coords.lng} | lat:{coords.lat} | zoom {coords.zoom}
        </div>
        <div
          ref= {mapDiv}
          className="mapContainer"
        />
            
        </>
    )

}
export default MapPage; 