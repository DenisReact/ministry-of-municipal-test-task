import { LatLngExpression } from "leaflet";
import React, { FC } from "react";
import { Circle, MapContainer, TileLayer } from "react-leaflet";

interface MapProps {
  style?: React.CSSProperties;
}

const Map: FC<MapProps> = ({ style }) => {
  const center: LatLngExpression = [24.650070939784257, 46.82431786860347];
  const fillBlueOptions = { fillColor: "#23A698", color: "#23A698" };

  return (
    <MapContainer
      center={center}
      style={{ width: "100%", height: "100%", ...style }}
      zoom={4}
    >
      <TileLayer
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=83ifKr52gNdAc5JySQqs"
      />
      <Circle center={center} pathOptions={fillBlueOptions} radius={200000} />
    </MapContainer>
  );
};

export default Map;
