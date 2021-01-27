import React from "react"; 
import { SocketProvider } from "./context/SocketContext";
import MapPage from "./pages/MapPage"

export const MapsApp = () => {
    return (
        <div>
            <SocketProvider>
                  <MapPage/>
            </SocketProvider>
        </div>
    )

}
export default MapsApp; 