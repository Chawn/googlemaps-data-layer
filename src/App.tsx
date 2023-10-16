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
		googleMapsApiKey: 'YOUR API KEYS',
	});

	const [map, setMap] = React.useState(null);
	const [map2, setMap2] = React.useState(null);

	const onLoad = React.useCallback(function callback(map: any) {
		setMap(map);

    // Load and style the first GeoJSON layer
    map.data.loadGeoJson('http://localhost:5174/src/assets/hybiot.json');
    map.data.setStyle({
      fillColor: 'green',
      strokeWeight: 1,
    });

    // Create a new Data layer for the second GeoJSON
    const secondLayer = new window.google.maps.Data();
    secondLayer.loadGeoJson('http://localhost:5174/src/assets/io.json');
    secondLayer.setStyle({
      fillColor: 'red',
      strokeWeight: 1,
    });

    // Add the second layer to the map
    secondLayer.setMap(map);


		 // Create a new Data layer for the second GeoJSON
		 const thirdLayer = new window.google.maps.Data();
		 thirdLayer.loadGeoJson('http://localhost:5174/src/assets/wow.json');
		 thirdLayer.setStyle({
			 fillColor: 'purple',
			 strokeWeight: 1,
		 });
 
		 // Add the second layer to the map
		 thirdLayer.setMap(map);

		  // Create a new Data layer for the second GeoJSON
			const fourthLayer = new window.google.maps.Data();
			fourthLayer.loadGeoJson('http://localhost:5174/src/assets/face.json');
			fourthLayer.setStyle({
				fillColor: 'yellow',
				strokeWeight: 1,
			});
	
			// Add the second layer to the map
			fourthLayer.setMap(map);
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
			<></>
		</GoogleMap>
	) : (
		<></>
	);
}

export default React.memo(MyComponent);
