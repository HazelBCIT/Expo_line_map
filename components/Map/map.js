import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import style from '../../styles/Home.module.css';

import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker} from 'react-leaflet';




export default function Map() {

const position = [49.2198, -122.9877];

const polyline = [
  [49.28594, -123.11129], // Waterfront
  [49.2856, -123.1202],// Burrard Station
  [49.2833, -123.1218],// Granville Station
  [49.2743, -123.1056],// Stadium–Chinatown Station
  [49.2731, -123.1003],// Main Street–Science World Station
  [49.2626, -123.0692],// Commercial–Broadway Station
  [49.2483, -123.0559],// Nanaimo Station
  [49.2440, -123.0459],// 29th Ave Station
  [49.2383, -123.0317],// Joyce–Collingwood Station
  [49.2298, -123.0127],// Patterson Station
  [49.2258, -123.0039],// Metrotown Station
  [49.2198, -122.9877],// Royal Oak Station
  [49.2120, -122.9592],// Edmonds Station
  [49.2000, -122.9490],// 22nd Street Station
  [49.2015, -122.9126],// New Westminster Station
  [49.20476, -122.9061],// Columbia Station
  [49.2244, -122.8896],// Sapperton Station
  [49.2333, -122.8829],// Braid Station
  [49.2484, -122.8970],// Lougheed Town Centre Station
  [49.2533, -122.9181],// Production Way–University Station
]

const polyline_KingGeorge = [
  [49.20476, -122.9061],// Columbia Station
  [49.2044, -122.8743],// Scott Road Station
  [49.1990, -122.8507],// Gateway Station
  [49.1896, -122.8480],// Surrey Central Station
  [49.1827, -122.8446],// King George Station
]

const blueOption ={ color:'#214b90'};
const redOption ={ color:'red'};

const getIcon = new L.Icon ({
  iconUrl: require("../../assets/expo-icon.png"),
  iconSize: [40, 40],
});

  return (
    <MapContainer className={style.map} center={position} zoom={12} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
{/* 
icon={getIcon} */}

      <Marker position={[49.28594, -123.11129]} icon={getIcon}  >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Waterfront
        </Popup>
      </Marker>

      <Marker position={[49.2856, -123.1202]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Burrard Station
        </Popup>
      </Marker>

      <Marker position={[49.2833, -123.1218]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Stadium–Chinatown Station
        </Popup>
      </Marker>

      <Marker position={[49.2731, -123.1003]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Main Street–Science World Station
        </Popup>
      </Marker>

      <Marker position={[49.2626, -123.0692]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Commercial–Broadway Station
        </Popup>
      </Marker>

      <Marker position={[49.2483, -123.0559]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Nanaimo Station
        </Popup>
      </Marker>

      <Marker position={[49.2440, -123.0459]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          29th Ave Station
        </Popup>
      </Marker>

      <Marker position={[49.2383, -123.0317]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Joyce–Collingwood Station
        </Popup>
      </Marker>

      <Marker position={[49.2298, -123.0127]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Patterson Station
        </Popup>
      </Marker>

      <Marker position={[49.2258, -123.0039]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Metrotown Station
        </Popup>
      </Marker>

      <Marker position={[49.2198, -122.9877]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Royal Oak Station
        </Popup>
      </Marker>

      <Marker position={[49.2120, -122.9592]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Edmonds Station
        </Popup>
      </Marker>

      <Marker position={[49.2000, -122.9490]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          22nd Street Station
        </Popup>
      </Marker>

      <Marker position={[49.2015, -122.9126]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          New Westminster Station
        </Popup>
      </Marker>

      <Marker position={[49.20476, -122.9061]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Columbia Station
        </Popup>
      </Marker>

      <Marker position={[49.2244, -122.8896]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Sapperton Station
        </Popup>
      </Marker>

      <Marker position={[49.2333, -122.8829]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Braid Station
        </Popup>
      </Marker>

      <Marker position={[49.2484, -122.8970]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Lougheed Town Centre Station
        </Popup>
      </Marker>

      <Marker position={[49.2533, -122.9181]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Production Way–University Station
        </Popup>
      </Marker>

     {/* ---------To King George Station--------- */}
     <Marker position={[49.2044, -122.8743]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Scott Road Station
        </Popup>
      </Marker>

      <Marker position={[49.1990, -122.8507]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Gateway Station
        </Popup>
      </Marker>

      <Marker position={[49.1896, -122.8480]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          Surrey Central Station
        </Popup>
      </Marker>

      <Marker position={[49.1827, -122.8446]} >
        <Popup>
          <b>Expo Line</b>
          <br/> 
          King George Station
        </Popup>
      </Marker>

      {/* <CircleMarker center={[49.27450, -123.12189]} pathOptions={redOption} radius={20}>
        <Popup>You reach your destination!</Popup>
      </CircleMarker> */}

      <Polyline pathOptions={blueOption} positions={polyline}/>
      <Polyline pathOptions={blueOption} positions={polyline_KingGeorge}/>


    </MapContainer>

  )
}