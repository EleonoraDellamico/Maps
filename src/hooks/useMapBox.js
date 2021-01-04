import { useCallback, useEffect, useRef, useState}from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2l1bGlvNzgiLCJhIjoiY2tqaGNneGtiOTk1MzJ2cWpyemljZHQzcSJ9.HnFfA7OBcnwbaFJq-vB-5w';
export const useMapBox = (firstSpot ) =>{
    const mapDiv = useRef();
    const setRef = useCallback ( (node)=> {
        mapDiv.current=node;
    },[] )
    
    
    
    
    const mapa = useRef();
    const[coords, setCoords]= useState(firstSpot);
   
    useEffect(()=>{
        const map = new mapboxgl.Map({
        container: mapDiv.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [firstSpot.lng, firstSpot.lat],
        zoom: firstSpot.zoom
});
    mapa.current= map;
    },[firstSpot ]);

        useEffect (()=>{
        mapa.current?.on("move",()=>{
            console.log("hey");
            const{lng, lat} = mapa.current.getCenter();
            console.log(lng.lat);
            setCoords({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom:mapa.current.getZoom().toFixed(2)
            })
        });

    },[]);


    return{
        coords,
        setRef

    }

}
export default useMapBox;