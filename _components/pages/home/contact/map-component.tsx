import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useEffect, useRef } from "react";

interface Props {
  cssClasses?: string;
}

const MapComponent = ({ cssClasses }: Props) => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ["marker"],
  });

  const onMapLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  useEffect(() => {
    if (isLoaded && mapRef.current && !markerRef.current) {
      markerRef.current = new google.maps.marker.AdvancedMarkerElement({
        map: mapRef.current,
        position: { lat: -33.9831811088706, lng: 23.439345100276874 },
        title: "Maple Ranch",
      });
    }

    return () => {
      if (markerRef.current) {
        markerRef.current.map = null;
        markerRef.current = null;
      }
    };
  }, [isLoaded]);

  if (!isLoaded)
    return (
      <div
        className={`bg-blue/20 grid place-items-center py-16 max-w-[1400px] ${cssClasses}`}
      >
        <p className="text-heading font-thin">Map loading...</p>
      </div>
    );

  return (
    <GoogleMap
      zoom={14.78}
      center={{ lat: -33.9875508, lng: 23.4324418 }}
      mapContainerClassName={cssClasses}
      onLoad={onMapLoad}
    />
  );
};

export default MapComponent;
