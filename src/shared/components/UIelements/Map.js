import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import './Map.css';

const Map = props => {
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 10
    });
    map.setCenter([props.lat, props.lng]);
    new mapboxgl.Marker().setLngLat([props.lat, props.lng]).addTo(map);
  }, [props.lat, props.lng]);

  return <div ref={mapRef} className="map"></div>;
};

export default Map;
