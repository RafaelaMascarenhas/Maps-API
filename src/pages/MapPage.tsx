import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { REACT_APP_GOOGLE_API_KEY } from "../App"
import "./MapPage.css" 
export interface MapPageProps{}


const MapPage = () => {
      const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyDu1EVSWaxBV_gMMQR-PPjg9bCmV1sgq4Y"
      });

      const position = { //coloquei como variável pra não precsar ficar repetindo os dados td vez q preciso da loc
        lat:-23.477484291981348, //loc da Alphaville em Sampa
        lng:-46.86826246435235,
    }
      
    return (
        <div className="mapinha">
          { isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width:'100%', height:'100%'}}
        center={position}
        zoom={15}
//criação da marker:
      > 
        <Marker position={position}/> 
      </GoogleMap>
        ) : ( 
            <></>
        )}  
    </div>
    );
};

export default MapPage