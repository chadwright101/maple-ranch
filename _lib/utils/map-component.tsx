import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useCallback, useRef, useEffect } from "react";

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
  }, []);

  useEffect(() => {
    if (!mapRef.current || !isLoaded) return;

    const createMarker = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 100));

        if (window.google?.maps?.marker?.AdvancedMarkerElement) {
          console.log("Creating AdvancedMarkerElement");
          markerRef.current =
            new window.google.maps.marker.AdvancedMarkerElement({
              map: mapRef.current,
              position: { lat: -33.9836191, lng: 23.4394283 },
              title: "Maple Ranch",
            });
        } else {
          console.log("Falling back to regular Marker");
          markerRef.current = new window.google.maps.Marker({
            map: mapRef.current,
            position: { lat: -33.9836191, lng: 23.4394283 },
            title: "Maple Ranch",
          }) as any;
        }
      } catch (error) {
        console.error("Error creating marker:", error);
        try {
          markerRef.current = new window.google.maps.Marker({
            map: mapRef.current,
            position: { lat: -33.9836191, lng: 23.4394283 },
            title: "Maple Ranch",
          }) as any;
        } catch (fallbackError) {
          console.error("Error creating fallback marker:", fallbackError);
        }
      }
    };

    createMarker();
  }, [isLoaded]);

  const onUnmount = useCallback(() => {
    if (markerRef.current) {
      if ("map" in markerRef.current) {
        markerRef.current.map = null;
      }
      if ("setMap" in markerRef.current) {
        (markerRef.current as any).setMap(null);
      }
      markerRef.current = null;
    }
    mapRef.current = null;
  }, []);

  if (!isLoaded)
    return (
      <div
        className={`bg-blue/20 grid place-items-center py-16 max-w-[1280px] ${cssClasses}`}
      >
        <p className="text-heading font-thin">Map loading...</p>
      </div>
    );

  return (
    <GoogleMap
      zoom={16}
      center={{ lat: -33.9836191, lng: 23.4394283 }}
      mapContainerClassName={cssClasses}
      onLoad={onMapLoad}
      onUnmount={onUnmount}
      options={{
        mapId: "maple-ranch-map",
      }}
    />
  );
};

export default MapComponent;
