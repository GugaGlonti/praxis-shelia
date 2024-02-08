import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

import image from '../assets/marker.png';

export default function Map() {
  const praxisCoords = {
    lat: 51.23117986225776,
    lng: 6.756080709216482,
  };

  const customIcon = new Icon({
    iconUrl: image,
    iconSize: [60, 60],
  });

  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Oberkasseler%20Str.%2069,%2040545%20D%C3%BCsseldorf,%20Deutschland';

  return (
    <div className='bg-gray-400 w-full h-96 rounded-md shadow-md overflow-hidden'>
      <style>{` .leaflet-container { height: 100%; width: 100%; } `}</style>
      <MapContainer
        placeholder={<div>Loading...</div>}
        attributionControl={false}
        center={praxisCoords}
        zoom={16}
        scrollWheelZoom={false}>
        <TileLayer
          url='https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
          attribution='&copy; Google'
        />
        <Marker
          position={praxisCoords}
          icon={customIcon}>
          <Popup>
            <a
              className='text-lg text-black no-underline hover:underline'
              href={directionsUrl}
              target='_blank'
              rel='noreferrer'>
              Physio & Sport Shelia
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
