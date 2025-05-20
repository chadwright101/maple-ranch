import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

interface Props {
  cssClasses?: string;
}

const MapComponent = ({ cssClasses }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });
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
      zoom={11.75}
      center={{ lat: -33.9855202, lng: 23.4353273 }}
      mapContainerClassName={cssClasses}
    >
      <Marker position={{ lat: -33.9831811088706, lng: 23.439345100276874 }} />
    </GoogleMap>
  );
};

export default MapComponent;
