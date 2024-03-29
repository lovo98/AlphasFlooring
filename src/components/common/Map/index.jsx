import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import customIcon from "~assets/images/location.png";

const index = () => {
	const position = [29.7422301, -95.4729384];
	const customMarkerIcon = L.icon({
		iconUrl: customIcon, // Ruta a tu icono personalizado
		iconSize: [32, 32], // Tamaño del icono
		iconAnchor: [16, 32], // Punto de anclaje del icono
		popupAnchor: [0, -32], // Punto de anclaje del popup
	});
	return (
		<MapContainer
			center={position}
			zoom={13}
			style={{ height: "400px", width: "100%" }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position} icon={customMarkerIcon}>
				<Popup>
					Alpha's Flooring LLC <br />
					2632 Yorktown st #549 <br />
					Houston Texas 77056
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default index;
