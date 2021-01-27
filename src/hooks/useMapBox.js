import { useCallback, useEffect, useRef, useState}from "react";
import mapboxgl from "mapbox-gl";
import {v4} from "uuid";
import { Subject } from "rxjs";

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2l1bGlvNzgiLCJhIjoiY2tqaGNneGtiOTk1MzJ2cWpyemljZHQzcSJ9.HnFfA7OBcnwbaFJq-vB-5w';
export const useMapBox = (firstSpot ) =>{
    //REFER TO DIVMAP
    const mapDiv = useRef();
    const setRef = useCallback ( (node)=> {
        mapDiv.current=node;
    },[] )

    //MARKER'S REFERENCE
    const point = useRef({});
    
    //OBSERVABLE RXJS
    const movementMark = useRef( new Subject ());
    const newMark = useRef( new Subject ());
    
    //MAP AND COORDS
    const mapa = useRef();
    const[coords, setCoords]= useState(firstSpot);

    //ADD MARKERS
     const addMarker = useCallback ((ev)=>{
         const { lng, lat }= ev.lngLat;
         const marker = new mapboxgl.Marker();
         marker.id = v4 (); // TODO si el marcador ya tiene ID
      
         marker
        .setLngLat ([lng,lat])
        .addTo (mapa.current)
        .setDraggable(true);
    
      point.current[ marker.id] = marker;

      //TODO; si el marcador tiene ID no emitir 
      newMark.current.next({
          id: marker.id,
          lng,
          lat
      });
    
      //LISTENING  the movement
      marker.on("drag", ({target})=>{
       const {id}=target;
       const {lng, lat }= target.getLngLat();

        movementMark.current.next({id,lng,lat})});

     },[]);
   
    useEffect(()=>{
        const map = new mapboxgl.Map({
        container: mapDiv.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [firstSpot.lng, firstSpot.lat],
        zoom: firstSpot.zoom
});
    mapa.current= map;
    },[firstSpot ]);

    // MOVING MAP
        useEffect (()=>{
        mapa.current?.on("move",()=>{
            const{lng, lat} = mapa.current.getCenter();
            setCoords({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom:mapa.current.getZoom().toFixed(2)
            })
        });

    },[]);
    
    // ADD PIN WHEN WE USE CLICK
     useEffect(() => {
         mapa.current?.on("click", (ev)=> {

            addMarker(ev);
             
            /* const { lng, lat }= ev.lngLat; */
            /* const marker = new mapboxgl.Marker(); */
            /* marker.id = v4 (); // TODO si el marcador ya tiene ID */
            /* marker */
            /*       .setLngLat ([lng,lat]) */
            /*       .addTo (mapa.current) */
            /*       .setDraggable(true); */
            /* point.current[ marker.id] = marker; */

         })

     },[addMarker]);




    return{
        addMarker,
        coords,
        movementMark$: movementMark.current,
        newMark$: newMark.current,
        point,
        setRef

    }

}
export default useMapBox;