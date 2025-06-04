import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useCallback, useRef } from "react";

interface Props {
  cssClasses?: string;
}

const libraries: "marker"[] = ["marker"];

const MapComponent = ({ cssClasses }: Props) => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;

    // Create marker immediately when map loads
    if (window.google?.maps?.marker?.AdvancedMarkerElement) {
      markerRef.current = new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: { lat: -33.9831811088706, lng: 23.439345100276874 },
        title: "Maple Ranch",
      });
    }
  }, []);

  const onUnmount = useCallback(() => {
    if (markerRef.current) {
      markerRef.current.map = null;
      markerRef.current = null;
    }
    mapRef.current = null;
  }, []);

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
      onUnmount={onUnmount}
    />
  );
};

export default MapComponent;
