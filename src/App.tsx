import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import data from './assets/google.json';

const containerStyle = {
	width: '1600px',
	height: '900px',
};

const center = {  lat: 13.658499097970763, lng: 100.61366111771123 }

function MyComponent() {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'YOUR_API_KEY',
	});

	const [map, setMap] = React.useState(null);

	const onLoad = React.useCallback(function callback(map: any) {
		// This is just an example of getting and using the map instance!!! don't just blindly copy!
		const bounds = new window.google.maps.LatLngBounds(center);
		// map.fitBounds(bounds);
		map.data.loadGeoJson("http://localhost:5174/src/assets/map.json");
		
		map.data.setStyle({
			fillColor: 'green',
			strokeWeight: 1
		});

		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(ma: any) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={12}
			onLoad={onLoad}
			onUnmount={onUnmount}
		>
			{/* Child components, such as markers, info windows, etc. */}
			<></>
		</GoogleMap>
	) : (
		<></>
	);
}

export default React.memo(MyComponent);
