
import { cleanup } from "@testing-library/react";
import { Marker } from "mapbox-gl";
import { useEffect } from "react";
import useMapBox from "../hooks/useMapBox";


const firstSpot = {
    lng: -3.7136112,
    lat: 40.3965164,
    zoom: 11.52
}
export const MapPage = () => {
    
    const {coords, setRef, newMark$, movementMark$}= useMapBox (firstSpot );
   
    useEffect(()=>{
newMark$.subscribe (marker =>{
    console.log(marker);
})
    }, [newMark$]);
    useEffect (()=>{
        movementMark$.subscribe(marker=>{
        console.log(marker);
        })
    });

    //REFACTORING USING HOOKS
    /* const mapDiv = useRef();
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
    },[]); */
//MOVING MAPA
/*     useEffect (()=>{
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
    },[]); */
    return (
        <>
        <div className = "info">
            lng:{coords.lng} | lat:{coords.lat} | zoom {coords.zoom}
        </div>
        <div
          ref= {setRef}
          className="mapContainer"
        />
            
        </>
    )

}
export default MapPage; 