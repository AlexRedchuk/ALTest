import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import './GoogleMapLoader.css'

const GoogleMapLoader = ({location}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const center = useMemo(() => ({lat: location.lat, lng: location.long}), [location]);

  if (!isLoaded) return <div>Loading...</div>;

  console.log(center)
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="mapContainer">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default GoogleMapLoader;
